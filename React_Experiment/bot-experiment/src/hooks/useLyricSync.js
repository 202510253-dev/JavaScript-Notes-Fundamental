import { useState, useEffect } from 'react';

// Fetches timestamped lyrics from LRCLIB and tracks which line
// should be showing based on audio.currentTime.
//
// LRCLIB docs: https://lrclib.net/docs

export function useLyricSync(songTitle, audioRef) {
  const [lyrics, setLyrics] = useState([]); // [{ time: 12.5, text: '...' }, ...]
  const [currentLine, setCurrentLine] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!songTitle) return;
    setLoading(true);

    // TODO: fetch + parse .lrc from LRCLIB, e.g.:
    // fetch(`https://lrclib.net/api/search?q=${encodeURIComponent(songTitle)}`)
    //   .then(res => res.json())
    //   .then(data => setLyrics(parseLrc(data[0].syncedLyrics)))
    //   .finally(() => setLoading(false));

    setLoading(false);
  }, [songTitle]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function handleTimeUpdate() {
      const idx = lyrics.findIndex((line, i) =>
        audio.currentTime >= line.time &&
        (!lyrics[i + 1] || audio.currentTime < lyrics[i + 1].time)
      );
      if (idx !== -1) setCurrentLine(lyrics[idx].text);
    }

    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, [lyrics, audioRef]);

  return { lyrics, currentLine, loading };
}
