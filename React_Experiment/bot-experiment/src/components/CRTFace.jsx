import { useEffect, useRef } from 'react';

// CRTFace — character-based static/flicker face, v2.
//
// v1 drew every "on" point as a filled rectangle: no directionality, so
// diagonal strokes (hair, jaw curve) still rendered as flat horizontal
// blobs, and total point count was too low (~300) to read as continuous
// linework.
//
// v2 fixes both: contours are sampled far more densely (order of magnitude
// more points), and each point renders as an actual monospace CHARACTER
// chosen to match the LOCAL STROKE DIRECTION (-, /, |, \) — the same trick
// real ASCII art uses to fake continuous curves out of discrete glyphs.
// Structure is still authored once and fixed; only per-point visibility
// flickers, so the "static resolving into a picture" feel is unchanged.

const FACE_W = 320;
const FACE_H = 320;
const CX = 0.5;

const BG_FONT = 7;       // px — background static glyph size
const FEATURE_FONT = 10; // px — hair/brow/eye/mouth glyph size, visually heavier

const INTERIOR_PROB = 0.05;
const EDGE_PROB = 0.55;     // head outline contour
const HAIR_PROB = 0.78;
const FEATURE_PROB = 0.92;  // brows/eyes/mouth

const MOUTH_OSC_SPEED = 0.006; // radians per ms — how fast the mouth swaps open/closed

// Pick a glyph that visually matches a stroke direction (radians).
function glyphForAngle(angle) {
  const a = ((angle % Math.PI) + Math.PI) % Math.PI;
  const deg = (a * 180) / Math.PI;
  if (deg < 22.5 || deg >= 157.5) return '-';
  if (deg < 67.5) return '\\';
  if (deg < 112.5) return '|';
  return '/';
}

// Head silhouette half-width at normalized row position (0 top, 1 chin).
function headHalfWidth(ny) {
  const MAX_HW = 0.31;
  if (ny < 0.10) return 0;
  if (ny < 0.50) {
    const t = (ny - 0.10) / 0.40;
    return MAX_HW * (0.35 + 0.65 * Math.sin(t * Math.PI * 0.5));
  }
  const t = (ny - 0.50) / 0.50;
  return MAX_HW * (1 - t * t * 0.92);
}

// One continuous, densely-sampled contour around the whole head: down the
// right side, across the chin, back up the left side. Each point's glyph
// matches the LOCAL TANGENT so the outline reads as a real curve, not a
// stack of identical horizontal dashes.
function buildOutline(points, prob, alpha, font) {
  const raw = [];
  const STEP = 0.006;
  for (let ny = 0.10; ny <= 1.0; ny += STEP) raw.push([CX + headHalfWidth(ny), ny]);
  for (let ny = 1.0; ny >= 0.10; ny -= STEP) raw.push([CX - headHalfWidth(ny), ny]);

  for (let i = 0; i < raw.length; i++) {
    const prev = raw[Math.max(0, i - 1)];
    const next = raw[Math.min(raw.length - 1, i + 1)];
    const angle = Math.atan2(next[1] - prev[1], next[0] - prev[0]);
    points.push({ nx: raw[i][0], ny: raw[i][1], glyph: glyphForAngle(angle), prob, alpha, font });
  }
}

// A straight dash-line between two fixed anchor points, single direction.
function pushLine(points, [x0, y0], [x1, y1], count, prob, alpha, font) {
  const angle = Math.atan2(y1 - y0, x1 - x0);
  const glyph = glyphForAngle(angle);
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0 : i / (count - 1);
    points.push({ nx: x0 + (x1 - x0) * t, ny: y0 + (y1 - y0) * t, glyph, prob, alpha, font });
  }
}

// Points along an elliptical arc, each glyph matching that point's tangent.
function pushArc(points, [cx, cy], rx, ry, a0, a1, count, prob, alpha, font) {
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0 : i / (count - 1);
    const a = a0 + (a1 - a0) * t;
    const x = cx + rx * Math.cos(a);
    const y = cy + ry * Math.sin(a);
    const tangent = Math.atan2(ry * Math.cos(a), -rx * Math.sin(a));
    points.push({ nx: x, ny: y, glyph: glyphForAngle(tangent), prob, alpha, font });
  }
}

// Build the fixed point structure ONCE. No position ever changes after
// this — only which points are visible on a given frame.
function buildStructure() {
  const points = [];

  // --- Head outline: one continuous, densely-sampled contour ---
  buildOutline(points, EDGE_PROB, 0.75, FEATURE_FONT);

  // --- Background static: sparse texture, unrelated to any curve ---
  for (let i = 0; i < 260; i++) {
    const ny = 0.08 + Math.random() * 0.85;
    const hw = headHalfWidth(ny) * 0.85;
    if (hw <= 0) continue;
    const nx = CX + (Math.random() * 2 - 1) * hw;
    points.push({ nx, ny, glyph: '.', prob: INTERIOR_PROB, alpha: 0.3, font: BG_FONT });
  }

  // --- Hair: jagged fringe + two side locks, densely sampled ---
  const bangPeaks = [
    [0.20, 0.20], [0.28, 0.09], [0.37, 0.16], [0.44, 0.07],
    [0.50, 0.14], [0.56, 0.07], [0.63, 0.16], [0.72, 0.09], [0.80, 0.20],
  ];
  for (let i = 0; i < bangPeaks.length - 1; i++) {
    pushLine(points, bangPeaks[i], bangPeaks[i + 1], 10, HAIR_PROB, 0.9, FEATURE_FONT);
  }
  [-1, 1].forEach((side) => {
    const top = [CX + side * 0.30, 0.20];
    const mid = [CX + side * 0.36, 0.50];
    const bottom = [CX + side * 0.30, 0.80];
    pushLine(points, top, mid, 14, HAIR_PROB, 0.85, FEATURE_FONT);
    pushLine(points, mid, bottom, 14, HAIR_PROB * 0.8, 0.65, FEATURE_FONT);
  });

  // --- Eyebrows ---
  [-1, 1].forEach((side) => {
    const inner = [CX + side * 0.10, 0.375];
    const outer = [CX + side * 0.22, 0.355];
    pushLine(points, inner, outer, 8, FEATURE_PROB, 0.95, FEATURE_FONT);
  });

  // --- Eyes: dense arcs + iris cluster + highlight ---
  [-1, 1].forEach((side) => {
    const cx = CX + side * 0.18;
    const cy = 0.47;
    const rx = 0.085;
    const ry = 0.065;
    pushArc(points, [cx, cy], rx, ry, Math.PI, Math.PI * 2, 16, FEATURE_PROB, 1, FEATURE_FONT);
    pushArc(points, [cx, cy + ry * 0.15], rx * 0.85, ry * 0.4, 0, Math.PI, 10, 0.55, 0.55, BG_FONT);
    for (let ix = -1; ix <= 1; ix++) {
      for (let iy = -1; iy <= 1; iy++) {
        points.push({
          nx: cx + ix * rx * 0.22, ny: cy + iy * ry * 0.28,
          glyph: ':', prob: 0.9, alpha: 0.95, font: FEATURE_FONT,
        });
      }
    }
    points.push({ nx: cx - rx * 0.32, ny: cy - ry * 0.32, glyph: '*', prob: 0.98, alpha: 1, font: FEATURE_FONT });
  });

  // --- Nose: barely-there hint ---
  points.push({ nx: CX, ny: 0.565, glyph: '.', prob: 0.18, alpha: 0.25, font: BG_FONT });

  // --- Mouth: two FIXED variants (closed / open pair). Talking swaps which
  // fixed variant is shown — points still never move. ---
  const mouthClosed = [];
  const mouthOpen = [];
  for (let i = 0; i < 10; i++) {
    const t = i / 9;
    const nx = CX - 0.055 + t * 0.11;
    mouthClosed.push({ nx, ny: 0.70, glyph: '-', alpha: 0.9, font: FEATURE_FONT });
    mouthOpen.push({ nx, ny: 0.685, glyph: '-', alpha: 0.9, font: FEATURE_FONT });
    mouthOpen.push({ nx, ny: 0.72, glyph: '-', alpha: 0.9, font: FEATURE_FONT });
  }

  return { points, mouthClosed, mouthOpen };
}

export default function CRTFace({ speaking = false }) {
  const canvasRef = useRef(null);
  const structureRef = useRef(null);
  if (!structureRef.current) structureRef.current = buildStructure();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = FACE_W * dpr;
      canvas.height = FACE_H * dpr;
      canvas.style.width = FACE_W + 'px';
      canvas.style.height = FACE_H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    const { points, mouthClosed, mouthOpen } = structureRef.current;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let rafId;
    function frame(now) {
      ctx.clearRect(0, 0, FACE_W, FACE_H);

      function drawPoint(p, prob) {
        if (Math.random() >= prob) return; // void — skip, position unchanged
        const jitter = 0.8 + 0.2 * Math.random();
        ctx.font = `${p.font}px monospace`;
        ctx.fillStyle = `rgba(210, 215, 225, ${(p.alpha * jitter).toFixed(3)})`;
        ctx.fillText(p.glyph, p.nx * FACE_W, p.ny * FACE_H);
      }

      for (const p of points) drawPoint(p, p.prob);

      // Mouth: pick which fixed variant is active this frame (swap, don't move).
      const openPhase = speaking ? 0.5 + 0.5 * Math.sin(now * MOUTH_OSC_SPEED) : 0;
      const activeMouth = openPhase > 0.5 ? mouthOpen : mouthClosed;
      for (const p of activeMouth) drawPoint(p, FEATURE_PROB);

      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [speaking]);

  return (
    <div
      className="crt-face"
      style={{
        background: '#000',
        display: 'inline-block',
        width: FACE_W,
        height: FACE_H,
        lineHeight: 0,
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}
