import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import NowPlaying from './components/NowPlaying';
import CRTFace from './components/CRTFace';
import './App.css';

// App.jsx = the "brain" that decides which mode is showing.
// This is the state-driven switch we talked about.

function App() {
  const [mode, setMode] = useState('chat'); // 'chat' | 'nowPlaying'
  const [nowPlayingSong, setNowPlayingSong] = useState(null);
  const [speaking, setSpeaking] = useState(false);

  function handlePlayRequest(songTitle) {
    setNowPlayingSong(songTitle);
    setMode('nowPlaying');
  }

  function handleExitPlaying() {
    setMode('chat');
    setNowPlayingSong(null);
  }

  return (
    <div className="app">
      <CRTFace speaking={speaking} />
      {mode === 'chat' && (
        <ChatWindow onPlayRequest={handlePlayRequest} onSpeakingChange={setSpeaking} />
      )}
      {mode === 'nowPlaying' && (
        <NowPlaying song={nowPlayingSong} onExit={handleExitPlaying} />
      )}
    </div>
  );
}

export default App;
