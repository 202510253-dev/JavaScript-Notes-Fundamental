import { useState } from 'react';
import ChatBubble from './ChatBubble';
import { detectPlayIntent } from '../hooks/useIntentDetection';

// ChatWindow = casual chat mode.
// Talks to your backend (/api/chat) which calls the LLM with your personality profile.

export default function ChatWindow({ onPlayRequest, onSpeakingChange }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'sup, what\'s up?' }
  ]);
  const [input, setInput] = useState('');

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), sender: 'user', text: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');

    // Check for "play [song]" intent BEFORE hitting the LLM
    const song = detectPlayIntent(input);
    if (song) {
      onPlayRequest(song);
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      const botReplyText = data.reply || "(no response)";
      const botReply = { id: Date.now() + 1, sender: 'bot', text: botReplyText };

      // Turn mouth animation on while the reply "is being said".
      // NOTE: when the backend is real (especially with streaming), swap this
      // for onSpeakingChange(true) on first token, onSpeakingChange(false) on
      // stream close — more accurate than a duration estimate.
      onSpeakingChange(true);
      setMessages(prev => [...prev, botReply]);

      const duration = Math.min(1200 + botReplyText.length * 40, 6000);
      setTimeout(() => onSpeakingChange(false), duration);
    } catch (err) {
      console.error('Chat request failed:', err);
      setMessages(prev => [...prev, {
        id: Date.now() + 1, sender: 'bot', text: "(couldn't reach the server — is server.js running?)",
      }]);
    }
  }

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map(msg => <ChatBubble key={msg.id} {...msg} />)}
      </div>
      <div className="input-row">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="say something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
