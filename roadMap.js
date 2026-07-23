const {
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
    Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
    BorderStyle, WidthType, ShadingType, PageNumber, PageBreak,
    PageOrientation
} = require("docx");
const fs = require("fs");

// ── Colors ──────────────────────────────────────────────────────────────────
const C = {
    // Phase colors (fill / border / text)
    p1: { fill: "E8EAF6", border: "5C6BC0", text: "1A237E", sub: "3949AB" }, // indigo  – Backend
    p2: { fill: "E8F5E9", border: "43A047", text: "1B5E20", sub: "2E7D32" }, // green   – Frontend
    p3: { fill: "FFF3E0", border: "FB8C00", text: "E65100", sub: "EF6C00" }, // amber   – Integration
    p4: { fill: "FCE4EC", border: "E91E63", text: "880E4F", sub: "AD1457" }, // pink    – Admin
    p5: { fill: "EDE7F6", border: "7B1FA2", text: "4A148C", sub: "6A1B9A" }, // purple  – Hardening
    p6: { fill: "E0F2F1", border: "00897B", text: "004D40", sub: "00695C" }, // teal    – Deployment
    note: { fill: "FFFDE7", border: "F9A825", text: "5D4037", sub: "6D4C41" }, // yellow  – callout
    dark: { fill: "263238", border: "37474F", text: "ECEFF1", sub: "B0BEC5" }, // dark    – title
};

const bdr = (color) => ({ style: BorderStyle.SINGLE, size: 3, color });
const borders = (c) => ({ top: bdr(c), bottom: bdr(c), left: bdr(c), right: bdr(c) });
const noBorder = () => ({ style: BorderStyle.NONE, size: 0, color: "FFFFFF" });
const noBorders = () => ({ top: noBorder(), bottom: noBorder(), left: noBorder(), right: noBorder() });

function sp(h = 120) { return new Paragraph({ spacing: { after: h }, children: [new TextRun("")] }); }

// ── Phase header (full-width colored band) ──────────────────────────────────
function phaseHeader(label, sub, c) {
    return new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [9360],
        rows: [new TableRow({
            children: [new TableCell({
                borders: borders(c.border),
                shading: { fill: c.fill, type: ShadingType.CLEAR },
                margins: { top: 180, bottom: 180, left: 240, right: 240 },
                width: { size: 9360, type: WidthType.DXA },
                children: [
                    new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: label, bold: true, size: 28, color: c.text, font: "Calibri" })] }),
                    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: sub, size: 20, color: c.sub, font: "Calibri" })] }),
                ]
            })]
        })],
    });
}

// ── Step card ───────────────────────────────────────────────────────────────
function step(num, title, bullets, c, wide = false) {
    const w = wide ? 9360 : 4560;
    return new Table({
        width: { size: w, type: WidthType.DXA },
        columnWidths: [w],
        rows: [new TableRow({
            children: [new TableCell({
                borders: borders(c.border),
                shading: { fill: c.fill, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 200, right: 200 },
                width: { size: w, type: WidthType.DXA },
                children: [
                    new Paragraph({
                        spacing: { after: 60 }, children: [
                            new TextRun({ text: num + "  ", bold: true, size: 22, color: c.border, font: "Calibri" }),
                            new TextRun({ text: title, bold: true, size: 22, color: c.text, font: "Calibri" }),
                        ]
                    }),
                    ...bullets.map(b => new Paragraph({
                        numbering: { reference: "dots", level: 0 },
                        spacing: { after: 40, line: 260 },
                        children: [new TextRun({ text: b, size: 19, color: c.sub, font: "Calibri" })]
                    }))
                ]
            })]
        })],
    });
}

// ── Two-column row of step cards ────────────────────────────────────────────
function twoCol(left, right, c) {
    const half = 4560;
    const gap = 240;
    function cell(card) {
        return new TableCell({
            borders: noBorders(),
            width: { size: half, type: WidthType.DXA },
            margins: { top: 0, bottom: 0, left: 0, right: gap / 2 },
            children: [card],
        });
    }
    return new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [half, half],
        rows: [new TableRow({ children: [cell(left), cell(right)] })],
    });
}

// ── Milestone banner ────────────────────────────────────────────────────────
function milestone(text, c) {
    return new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [9360],
        rows: [new TableRow({
            children: [new TableCell({
                borders: borders(c.border),
                shading: { fill: c.fill, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 240, right: 240 },
                width: { size: 9360, type: WidthType.DXA },
                children: [new Paragraph({
                    alignment: AlignmentType.CENTER, children: [
                        new TextRun({ text: "✓  " + text, bold: true, size: 20, color: c.text, font: "Calibri" })
                    ]
                })]
            })]
        })],
    });
}

// ── Callout box ─────────────────────────────────────────────────────────────
function callout(title, lines) {
    return new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [9360],
        rows: [new TableRow({
            children: [new TableCell({
                borders: borders(C.note.border),
                shading: { fill: C.note.fill, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 240, right: 240 },
                width: { size: 9360, type: WidthType.DXA },
                children: [
                    new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: title, bold: true, size: 21, color: C.note.text, font: "Calibri" })] }),
                    ...lines.map(l => new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: l, size: 19, color: C.note.sub, font: "Calibri" })] }))
                ]
            })]
        })],
    });
}

// ── Connector arrow (text row) ───────────────────────────────────────────────
function arrow(label = "next phase") {
    return new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 60, after: 60 },
        children: [new TextRun({ text: "↓  " + label, size: 19, color: "888888", italics: true, font: "Calibri" })]
    });
}

// ── Document ─────────────────────────────────────────────────────────────────
const doc = new Document({
    styles: {
        default: { document: { run: { font: "Calibri", size: 22, color: "1A1A1A" } } }
    },
    numbering: {
        config: [{
            reference: "dots",
            levels: [{
                level: 0, format: LevelFormat.BULLET, text: "·",
                alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 360, hanging: 200 } } }
            }]
        }]
    },
    sections: [{
        properties: {
            page: {
                size: { width: 12240, height: 15840 },
                margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 }
            }
        },
        headers: {
            default: new Header({
                children: [new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [new TextRun({ text: "OlongNotes — Build Roadmap", size: 16, color: "888888", italics: true, font: "Calibri" })]
                })]
            })
        },
        footers: {
            default: new Footer({
                children: [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({ text: "Page ", size: 16, color: "888888", font: "Calibri" }),
                        new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "888888", font: "Calibri" })
                    ]
                })]
            })
        },
        children: [

            // ── TITLE ──────────────────────────────────────────────────────────────
            new Table({
                width: { size: 9360, type: WidthType.DXA }, columnWidths: [9360],
                rows: [new TableRow({
                    children: [new TableCell({
                        borders: borders("263238"),
                        shading: { fill: "263238", type: ShadingType.CLEAR },
                        margins: { top: 300, bottom: 300, left: 360, right: 360 },
                        width: { size: 9360, type: WidthType.DXA },
                        children: [
                            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 }, children: [new TextRun({ text: "OlongNotes", bold: true, size: 56, color: "ECEFF1", font: "Calibri" })] }),
                            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new TextRun({ text: "Full Build Roadmap", size: 28, color: "B0BEC5", font: "Calibri" })] }),
                            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 0 }, children: [new TextRun({ text: "Node.js + Express  ·  Supabase (PostgreSQL + Auth + Storage)  ·  Vanilla JS", size: 20, color: "78909C", italics: true, font: "Calibri" })] }),
                        ]
                    })]
                })],
            }),
            sp(160),

            callout("How to read this roadmap", [
                "Each phase must be complete before the next one starts — no skipping.",
                "You own the backend (Layers 1–3) and share integration. Your teammates own the frontend shell.",
                "Every step lists what 'done' looks like so the team agrees, not just the individual.",
                "Database: already solved — Supabase is cloud-hosted. No local MySQL, no XAMPP database crashes.",
            ]),
            sp(200),

            // ══════════════════════════════════════════════════════════════════════
            // PHASE 1 — PROJECT FOUNDATION
            // ══════════════════════════════════════════════════════════════════════
            phaseHeader("Phase 1 — Project Foundation", "Before a single feature is built. This is your scaffolding.", C.p1),
            sp(80),

            twoCol(
                step("1.1", "GitHub repo + branch rules", [
                    "One person creates the repo (private for now)",
                    "Everyone clones it — confirm all four can push",
                    "Create branches: main, dev, and one per person",
                    "Write README with stack, setup instructions, .env.example",
                    "Set rule: nothing merges to main without review",
                ], C.p1),
                step("1.2", "Local environment", [
                    "Node.js installed on all four machines",
                    "VS Code + ESLint + Prettier configured",
                    "npm init, install: express dotenv cors helmet",
                    "Install: @supabase/supabase-js nodemon multer",
                    "Install: express-validator uuid",
                    "Confirm: node server.js runs on localhost:3000",
                ], C.p1)
            ),
            sp(80),

            twoCol(
                step("1.3", "Supabase project setup", [
                    "One account, one project — share keys privately (not GitHub)",
                    "Paste your finalized schema into SQL editor and run it",
                    "Tables: users, schools, subjects, subject_categories",
                    "Tables: notes, likes, bookmarks, folders, folder_items",
                    "Tables: questions, answers, answer_likes, question_likes",
                    "Tables: activity_log, reports, site_config",
                    "Enable RLS on ALL tables before any data is inserted",
                    "Confirm all tables appear in the Supabase dashboard",
                ], C.p1),
                step("1.4", "Express server scaffold", [
                    "server.js with helmet(), cors(), express.json()",
                    "express.static('public') serves your HTML files",
                    "routes/ folder created — one file per feature area",
                    "middleware/ folder: auth.js and adminOnly.js stubs",
                    "Supabase client initialized from .env variables",
                    ".env has: SUPABASE_URL, SUPABASE_KEY, PORT",
                    ".gitignore has: .env, node_modules/",
                    "Test: GET /health returns { status: 'ok' }",
                ], C.p1)
            ),
            sp(100),

            milestone("Phase 1 complete when: repo is live, all four teammates cloned, Supabase tables exist with RLS on, Express server runs and responds to a test route.", C.p1),
            sp(60),
            callout("Your role in Phase 1", [
                "You own 1.3 and 1.4 entirely — schema + server scaffold is your domain.",
                "Make sure your teammates can actually run the project on their machines before Phase 2 starts.",
                "The schema you finalized (with file_url, file_type, file_size, annotation, view_count, reports, site_config) is correct. Run it as-is.",
            ]),
            sp(200),
            arrow(),

            // ══════════════════════════════════════════════════════════════════════
            // PHASE 2 — AUTH LAYER
            // ══════════════════════════════════════════════════════════════════════
            phaseHeader("Phase 2 — Authentication Layer", "The most critical backend work. Build this before any feature.", C.p1),
            sp(80),

            step("2.1", "Supabase Auth — registration and login endpoints", [
                "POST /api/auth/register — call supabase.auth.signUp(), then insert into profiles table",
                "Profile insert sets: username, role = 'viewer', account_status = 'active'",
                "POST /api/auth/login — call supabase.auth.signInWithPassword()",
                "On success: return the JWT access token to the frontend",
                "POST /api/auth/logout — call supabase.auth.signOut()",
                "Wrap all three in try/catch — never let a raw Supabase error reach the client",
            ], C.p1, true),
            sp(80),

            step("2.2", "JWT middleware — the wall that protects everything", [
                "middleware/auth.js reads Authorization header: 'Bearer <token>'",
                "Calls supabase.auth.getUser(token) to verify — never decode JWT manually",
                "If invalid or missing: return 401 { message: 'Unauthorized' } — nothing else",
                "If valid: attach user object to req.user and call next()",
                "middleware/adminOnly.js runs AFTER auth.js — checks req.user.role === 'admin'",
                "If not admin: return 403 { message: 'Forbidden' } — never expose dashboard routes",
                "Test: hit a protected route with no token, expired token, wrong role — all must fail cleanly",
            ], C.p1, true),
            sp(80),

            twoCol(
                step("2.3", "Role system", [
                    "Valid roles: viewer, limited, verified, admin",
                    "Default on register: viewer",
                    "School email detected at register → limited",
                    "Admin manually upgrades to verified via dashboard",
                    "Admin accounts: created manually in Supabase only",
                    "No public path to become admin — ever",
                    "Add CHECK constraint on role column in Supabase",
                ], C.p1),
                step("2.4", "Login flow (matches your security diagram)", [
                    "Frontend validates fields before sending request",
                    "Express validates input (express-validator)",
                    "Supabase Auth checks credentials",
                    "Fail → 'Invalid email or password' (never say which)",
                    "Success → retrieve profile + role from profiles table",
                    "Check account_status — suspended = 403",
                    "Create JWT session, return token + role to frontend",
                    "Frontend stores token, routes based on role",
                ], C.p1)
            ),
            sp(100),

            milestone("Phase 2 complete when: register works, login returns a JWT, middleware blocks unauthorized requests, role routing sends users to the right page.", C.p1),
            sp(200),
            arrow(),

            // ══════════════════════════════════════════════════════════════════════
            // PHASE 3 — NOTES REPOSITORY (Core Feature 1)
            // ══════════════════════════════════════════════════════════════════════
            phaseHeader("Phase 3 — Notes Repository", "Core Feature 1 — The entire reason OlongNotes exists.", C.p2),
            sp(80),

            twoCol(
                step("3.1", "File upload endpoint", [
                    "POST /api/notes — protected, contributor role only",
                    "Multer validates before anything else runs",
                    "Allowed types: pdf, docx, xlsx, jpg, png only",
                    "Max file size: 10MB hard limit",
                    "Filename: generate with uuid — never use original name",
                    "Upload validated file to Supabase Storage bucket",
                    "Get public URL back from Supabase Storage",
                    "Save to notes table: title, subject_id, school_id,",
                    "  grade_level, file_url, file_type, file_size,",
                    "  annotation, user_id, status = 'pending'",
                    "Return the created note record to frontend",
                ], C.p2),
                step("3.2", "Fetch + filter notes endpoint", [
                    "GET /api/notes — public, no auth required",
                    "Query params: school, grade_level, subject, type",
                    "Build Supabase query dynamically based on params",
                    "Only return notes where status = 'published'",
                    "Join: profiles (username), schools (name),",
                    "  subjects (subject_name), grade_levels label",
                    "Order by created_at descending by default",
                    "GET /api/notes/:id — single note, increment view_count",
                    "Test: fetch all, fetch with each filter, fetch combined",
                ], C.p2)
            ),
            sp(80),

            twoCol(
                step("3.3", "Notes interactions", [
                    "POST /api/notes/:id/like — auth required, toggle like",
                    "Check if like exists: if yes delete, if no insert",
                    "POST /api/notes/:id/bookmark — same toggle pattern",
                    "GET /api/notes/:id/download — increment download_count",
                    "Return the file_url so frontend can open/download",
                    "DELETE /api/notes/:id — owner or admin only",
                    "Check: req.user.id === note.user_id OR role = admin",
                    "Log deletion to activity_log",
                ], C.p2),
                step("3.4", "RLS policies for notes", [
                    "SELECT: anyone can read published notes",
                    "INSERT: only verified contributors (role = verified)",
                    "UPDATE: only note owner can update their own note",
                    "DELETE: note owner OR admin only",
                    "These rules live in Supabase — enforced at DB level",
                    "Test by trying to violate each rule directly in",
                    "  Supabase SQL editor — all violations must fail",
                    "Not just frontend gating — the DB itself says no",
                ], C.p2)
            ),
            sp(80),

            step("3.5", "Frontend — Reviewer Zone (your teammates build this, you connect it)", [
                "Static HTML shell first — filter dropdowns, note card grid — no real data yet",
                "Your teammates build the UI; you provide the API they call",
                "Connection point: fetch('/api/notes?school=X&grade=Y&subject=Z')",
                "You and one teammate sit together to connect the fetch() call to your endpoint",
                "Confirm: filter changes update the card list without page reload",
                "Confirm: clicking a note card opens the file via the file_url",
                "Confirm: upload form (for contributors) sends file to POST /api/notes",
                "Confirm: pending notes do NOT appear in the public Reviewer Zone",
            ], C.p2, true),
            sp(100),

            milestone("Phase 3 complete when: a contributor can upload a note, it appears as pending, admin approves it, it shows in the Reviewer Zone, filters work, download count increments.", C.p2),
            sp(200),
            arrow(),

            // ══════════════════════════════════════════════════════════════════════
            // PHASE 4 — Q&A SYSTEM (Core Feature 2)
            // ══════════════════════════════════════════════════════════════════════
            phaseHeader("Phase 4 — Q&A System", "Core Feature 2 — The Brainly-like community layer.", C.p3),
            sp(80),

            twoCol(
                step("4.1", "Questions endpoints", [
                    "POST /api/questions — auth required (any logged-in user)",
                    "Body: title, subject_id, grade_level",
                    "Insert with status = 'open', points = 0",
                    "GET /api/questions — public",
                    "Filter by: subject, grade_level, status (open/answered)",
                    "GET /api/questions/:id — single question with answers",
                    "DELETE /api/questions/:id — owner or admin only",
                    "POST /api/questions/:id/like — toggle, auth required",
                ], C.p3),
                step("4.2", "Answers endpoints", [
                    "POST /api/questions/:id/answers — auth required",
                    "Body: content",
                    "Insert with points = 0, status = 'pending'",
                    "GET /api/questions/:id/answers — public",
                    "POST /api/answers/:id/like — toggle, auth required",
                    "PUT /api/answers/:id/accept — question owner only",
                    "Sets is_accepted = true on that answer",
                    "Sets parent question status = 'answered'",
                    "DELETE /api/answers/:id — owner or admin only",
                ], C.p3)
            ),
            sp(80),

            twoCol(
                step("4.3", "Points system", [
                    "Points are simple — no complex algorithm needed",
                    "Ask a question: +2 points to asker (encourages asking)",
                    "Answer accepted: +10 points to answerer",
                    "Answer liked: +1 point to answerer per like",
                    "Points stored on answers table and aggregated on users",
                    "Calculate user total points with a Supabase query",
                    "Display on profile and Top Contributors section",
                    "Keep it simple — points are social signal, not currency",
                ], C.p3),
                step("4.4", "Q&A frontend connection", [
                    "Static Q&A feed shell built by teammates first",
                    "Filters: All Levels dropdown, Answered/Unanswered",
                    "Each question card shows: title, subject, points, likes",
                    "Click question → opens full view with answers",
                    "Answer form visible only to logged-in users",
                    "Accept answer button visible only to question owner",
                    "Like buttons toggle via fetch() to like endpoints",
                    "Confirm Solved/Unanswered tags update correctly",
                ], C.p3)
            ),
            sp(100),

            milestone("Phase 4 complete when: users can post questions, post answers, like both, accept an answer, and the status updates to Answered visibly in the feed.", C.p3),
            sp(200),
            arrow(),

            // ══════════════════════════════════════════════════════════════════════
            // PHASE 5 — ADMIN DASHBOARD
            // ══════════════════════════════════════════════════════════════════════
            phaseHeader("Phase 5 — Admin Dashboard", "Your control panel. Strictly role-gated. Never linked publicly.", C.p4),
            sp(80),

            step("5.1", "Admin route protection + overview", [
                "All admin routes: app.use('/api/admin', auth, adminOnly) — two middleware, no exceptions",
                "GET /api/admin/stats — total users, notes, questions, pending reports, downloads today, new signups",
                "Admin HTML page lives at public/admin.html — served by Express at /admin route",
                "adminOnly middleware runs before serving admin.html too — not just the API routes",
                "You and your team access /admin by typing the URL directly — never linked from public site",
                "Test: access /admin without token → denied. With user token → denied. With admin token → loads.",
            ], C.p4, true),
            sp(80),

            twoCol(
                step("5.2", "Content moderation routes", [
                    "GET /api/admin/notes/pending — notes with status=pending",
                    "PUT /api/admin/notes/:id/approve — set status=published",
                    "PUT /api/admin/notes/:id/reject — set status=rejected",
                    "  Body includes: reason (shown to contributor)",
                    "GET /api/admin/questions/pending — flagged Q&A",
                    "DELETE /api/admin/content/:id — remove any content",
                    "GET /api/admin/reports — reports inbox",
                    "PUT /api/admin/reports/:id — action or dismiss",
                    "Log every action to activity_log with admin user_id",
                ], C.p4),
                step("5.3", "User management routes", [
                    "GET /api/admin/users — all users, filter by role",
                    "GET /api/admin/users/:id — full profile + activity",
                    "PUT /api/admin/users/:id/role — change role",
                    "  Valid values: viewer, limited, verified, suspended",
                    "PUT /api/admin/users/:id/suspend — account_status",
                    "DELETE /api/admin/users/:id — permanent deletion",
                    "  Also deletes their notes and questions (cascade)",
                    "PUT /api/admin/users/:id/verify — set verified_at",
                    "Log every change to activity_log",
                ], C.p4)
            ),
            sp(80),

            twoCol(
                step("5.4", "School + subject management", [
                    "GET /api/admin/schools — list all schools",
                    "POST /api/admin/schools — add new school",
                    "PUT /api/admin/schools/:id — edit school name",
                    "DELETE /api/admin/schools/:id — remove school",
                    "GET /api/admin/subjects — list all subjects",
                    "POST /api/admin/subjects — add subject with category",
                    "PUT /api/admin/subjects/:id — edit subject",
                    "DELETE /api/admin/subjects/:id — remove subject",
                    "These are the dropdowns users see — keep them accurate",
                ], C.p4),
                step("5.5", "Analytics + site config", [
                    "GET /api/admin/analytics — top notes, subjects, schools",
                    "  top contributors by upload count and answer points",
                    "  downloads chart data (group by date)",
                    "GET /api/admin/config — read site_config table",
                    "PUT /api/admin/config/:key — update a config value",
                    "  Keys: site_name, max_file_size, allowed_types,",
                    "  maintenance_mode, allowed_school_domains",
                    "maintenance_mode = true → public site shows",
                    "  'Under maintenance' and blocks all writes",
                ], C.p4)
            ),
            sp(100),

            milestone("Phase 5 complete when: you can log into /admin, see real stats, approve/reject a note, change a user role, add a school, and every action is logged in activity_log.", C.p4),
            sp(200),
            arrow(),

            // ══════════════════════════════════════════════════════════════════════
            // PHASE 6 — USER PROFILES + SOCIAL FEATURES
            // ══════════════════════════════════════════════════════════════════════
            phaseHeader("Phase 6 — User Profiles + Social Features", "The profile system, bookmarks, folders, and activity feed.", C.p5),
            sp(80),

            twoCol(
                step("6.1", "Profile endpoints", [
                    "GET /api/users/:id — public profile",
                    "  Returns: username, bio, school, role, stats",
                    "  Stats: total notes, downloads, likes received, points",
                    "PUT /api/users/:id — update own profile only",
                    "  Check: req.user.id === params.id or 403",
                    "  Updateable: username, bio, school_id, grade_level,",
                    "    strand, avatar_url, location",
                    "GET /api/users/:id/notes — public notes by this user",
                    "GET /api/users/:id/questions — questions by this user",
                ], C.p5),
                step("6.2", "Bookmarks + folders", [
                    "GET /api/users/me/bookmarks — own bookmarks only",
                    "POST /api/notes/:id/bookmark — toggle bookmark",
                    "GET /api/users/me/folders — list own folders",
                    "POST /api/folders — create folder",
                    "POST /api/folders/:id/items — add note to folder",
                    "DELETE /api/folders/:id/items/:noteId — remove from folder",
                    "DELETE /api/folders/:id — delete folder + its items",
                    "GET /api/folders/:id — contents of one folder",
                ], C.p5)
            ),
            sp(80),

            twoCol(
                step("6.3", "Activity log + feed", [
                    "GET /api/users/me/activity — own activity feed",
                    "Shows: uploads, answers, likes given, bookmarks",
                    "activity_log auto-populated by backend on each action",
                    "Do not let frontend write to activity_log directly",
                    "Only backend routes insert into activity_log",
                    "GET /api/admin/activity — admin view of all activity",
                    "Filter by user_id, activity_type, date range",
                ], C.p5),
                step("6.4", "Top contributors", [
                    "GET /api/contributors/top — public endpoint",
                    "Query: users with most published notes",
                    "Secondary sort: total download_count on their notes",
                    "Return: username, avatar_url, school, note count,",
                    "  total downloads, points total",
                    "This powers the Top Contributors page and sidebar",
                    "Cache-friendly — doesn't change by the second",
                    "Frontend displays as leaderboard-style cards",
                ], C.p5)
            ),
            sp(100),

            milestone("Phase 6 complete when: profile pages load with real stats, bookmarks toggle and persist, folders can be created and populated, and Top Contributors shows real data.", C.p5),
            sp(200),
            arrow(),

            // ══════════════════════════════════════════════════════════════════════
            // PHASE 7 — HARDENING + INTEGRATION
            // ══════════════════════════════════════════════════════════════════════
            phaseHeader("Phase 7 — Hardening + Full Integration", "Security tightened. Frontend and backend fully connected. Everything tested together.", C.p5),
            sp(80),

            twoCol(
                step("7.1", "Input validation on all routes", [
                    "express-validator on every POST and PUT route",
                    "Registration: valid email format, password min 8 chars,",
                    "  username 3–20 chars, alphanumeric + underscore only",
                    "Upload: title max 100 chars, annotation max 500 chars",
                    "Questions: title max 200 chars, grade_level valid value",
                    "Sanitize: trim whitespace, escape HTML on all text fields",
                    "Return specific error messages — not generic 'error'",
                    "Validate on the server — never trust frontend-only validation",
                ], C.p5),
                step("7.2", "Rate limiting", [
                    "Install: express-rate-limit",
                    "Auth routes (login/register): 10 requests / 15 minutes",
                    "Upload route: 20 uploads / hour per user",
                    "General API: 100 requests / minute per IP",
                    "Return 429 with a clear message when limit hit",
                    "This prevents brute force login and upload spam",
                    "Especially important since this platform is public",
                ], C.p5)
            ),
            sp(80),

            twoCol(
                step("7.3", "CORS + security headers", [
                    "CORS origin: set to your production URL only",
                    "During dev: localhost:3000 only",
                    "Helmet already on — confirm all headers are present",
                    "X-Frame-Options: DENY (prevents clickjacking)",
                    "Content-Security-Policy: restrict script sources",
                    "Never expose stack traces in production error responses",
                    "NODE_ENV=production disables detailed error output",
                    "Test: check response headers in browser DevTools",
                ], C.p5),
                step("7.4", "End-to-end integration test", [
                    "Walk the full user journey as each role:",
                    "Viewer: browse notes, filter, open file — no login",
                    "Limited: register, login, post question, answer",
                    "Verified: upload note, see it pending, get approved",
                    "Admin: log into /admin, approve note, change role",
                    "Test every error path: wrong password, bad file type,",
                    "  unauthorized access, missing fields, no internet",
                    "Fix every broken path before Phase 8",
                ], C.p5)
            ),
            sp(80),

            step("7.5", "navigator.onLine + offline handling (frontend)", [
                "Wrap every fetch() call in try/catch — this is your safety net",
                "In the catch block: check navigator.onLine",
                "If false: show 'You appear to be offline. Please reconnect to continue.'",
                "If true but fetch failed: show 'Could not reach the server. Try again shortly.'",
                "Show these as non-blocking banners — not browser alerts",
                "On file upload failure mid-upload: clean up the Supabase Storage entry if partial",
                "OlongNotes requires internet — handle it gracefully, not silently",
            ], C.p5, true),
            sp(100),

            milestone("Phase 7 complete when: all routes are validated, rate limited, and tested. Full user journey works for all four roles. Errors are handled gracefully everywhere.", C.p5),
            sp(200),
            arrow(),

            // ══════════════════════════════════════════════════════════════════════
            // PHASE 8 — DEPLOYMENT
            // ══════════════════════════════════════════════════════════════════════
            phaseHeader("Phase 8 — Deployment", "Get it live. Judges open a URL — not a localhost.", C.p6),
            sp(80),

            twoCol(
                step("8.1", "Backend deployment — Railway", [
                    "Push final code to GitHub main branch",
                    "Connect Railway to your GitHub repo",
                    "Set all environment variables in Railway dashboard:",
                    "  SUPABASE_URL, SUPABASE_KEY, PORT, NODE_ENV=production",
                    "Never set these in code — Railway reads from dashboard",
                    "Railway gives you a public URL automatically",
                    "Test: hit your Railway URL /health — must return ok",
                    "Test: login from Railway URL — must work end-to-end",
                ], C.p6),
                step("8.2", "Frontend + final checks", [
                    "Update all fetch() URLs to your Railway backend URL",
                    "Or use relative paths if frontend served by Express",
                    "Update CORS origin in Express to Railway URL",
                    "Update Supabase allowed origins to Railway URL",
                    "Confirm HTTPS is active (Railway provides this free)",
                    "Confirm .env is NOT in the GitHub repo (check .gitignore)",
                    "Confirm admin.html is not discoverable from public nav",
                    "Do one final full walkthrough as all four roles",
                ], C.p6)
            ),
            sp(80),

            milestone("Phase 8 complete when: OlongNotes is live at a public URL, all four roles work, admin dashboard is accessible at /admin, and no secrets are exposed anywhere.", C.p6),
            sp(200),

            // ── SUMMARY TABLE ────────────────────────────────────────────────────
            new Table({
                width: { size: 9360, type: WidthType.DXA },
                columnWidths: [1400, 4560, 1700, 1700],
                rows: [
                    new TableRow({
                        children: [
                            "Phase", "What gets built", "Who leads", "Done when"
                        ].map((h, i) => new TableCell({
                            borders: borders("263238"),
                            shading: { fill: "263238", type: ShadingType.CLEAR },
                            width: { size: [1400, 4560, 1700, 1700][i], type: WidthType.DXA },
                            margins: { top: 100, bottom: 100, left: 160, right: 160 },
                            children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, size: 20, color: "ECEFF1", font: "Calibri" })] })]
                        }))]
            }),
            ...[
                ["1 — Foundation", "Repo, environment, Supabase schema, Express scaffold", "You + all", "Server runs, all tables exist"],
                ["2 — Auth", "Register, login, JWT middleware, role routing", "You", "Login works, roles enforced"],
                ["3 — Notes", "Upload, filter, like, bookmark, RLS", "You", "Full upload-to-browse flow works"],
                ["4 — Q&A", "Questions, answers, likes, accept, points", "You + teammate", "Questions posted and answered"],
                ["5 — Admin", "Dashboard, moderation, user mgmt, school mgmt", "You", "Admin can approve, reject, manage"],
                ["6 — Profiles", "Profile pages, folders, activity, top contributors", "Shared", "Profiles show real data"],
                ["7 — Hardening", "Validation, rate limiting, integration test, offline", "You", "All roles tested end-to-end"],
                ["8 — Deployment", "Railway hosting, env vars, final checks", "You + all", "Live URL, all roles work"],
            ].map((r, ri) => new TableRow({
                children: r.map((cell, ci) => new TableCell({
                    borders: borders("B0BEC5"),
                    shading: { fill: ri % 2 === 0 ? "FFFFFF" : "F5F5F5", type: ShadingType.CLEAR },
                    width: { size: [1400, 4560, 1700, 1700][ci], type: WidthType.DXA },
                    margins: { top: 80, bottom: 80, left: 160, right: 160 },
                    children: [new Paragraph({ children: [new TextRun({ text: cell, size: 18, color: "1A1A1A", font: "Calibri" })] })]
                }))
            }))
        ]
    }),
    sp(160),

        callout("The one rule that matters most", [
            "Never start a new phase until the current one is fully done and tested.",
            "A half-working Phase 3 plus a half-working Phase 4 is worse than a complete Phase 3 alone.",
            "For the hackathon: Phases 1–3 done cleanly is a submittable, defensible project.",
            "Phases 4–8 are what separates a good demo from an excellent one.",
        ]),
        sp(80),
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync("/home/claude/OlongNotes_Roadmap.docx", buf);
    console.log("done");
});