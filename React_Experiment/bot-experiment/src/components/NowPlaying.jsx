import { useState, useEffect, useRef } from 'react';
import { useLyricSync } from '../hooks/useLyricSync';

// NowPlaying = the "wow" mode.
// Fetches synced lyrics (.lrc format) and highlights the current line
// against audio.currentTime.

export default function NowPlaying({ song, onExit }) {
  const audioRef = useRef(null);
  const { lyrics, currentLine, loading } = useLyricSync(song, audioRef);

  return (
    <div className="now-playing">
      <button className="exit-btn" onClick={onExit}>← back to chat</button>
      <h2>{song}</h2>

      {loading && <p>loading lyrics...</p>}

      <div className="lyric-display">
        {currentLine ?? '...'}
      </div>

      {/* TODO: point src at your actual audio file / stream */}
      <audio ref={audioRef} controls src="" />
    </div>
  );
}
