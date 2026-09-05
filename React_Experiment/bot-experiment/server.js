import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { botProfile, buildSystemPrompt } from './src/data/botProfile.js';

const app = express();
app.use(cors());
app.use(express.json());

const PROVIDER = process.env.LLM_PROVIDER || 'ollama'; // 'ollama' | 'gemini'
const SYSTEM_PROMPT = buildSystemPrompt(botProfile);

// ---------- Ollama ----------
const OLLAMA_URL = 'http://localhost:11434/api/chat';
const OLLAMA_MODEL = 'llama3.1:8b';

async function callOllama(messages) {
  const ollamaMessages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...messages.map(m => ({
      role: m.sender === 'user' ? 'user' : 'assistant',
      content: m.text,
    })),
  ];

  const response = await fetch(OLLAMA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: OLLAMA_MODEL, messages: ollamaMessages, stream: false }),
  });

  if (!response.ok) throw new Error(`Ollama responded with status ${response.status}`);
  const data = await response.json();
  return data.message?.content ?? '(no response)';
}

// ---------- Gemini ----------
const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;
const geminiModel = genAI?.getGenerativeModel({
  model: 'gemini-2.0-flash',
  systemInstruction: SYSTEM_PROMPT,
});

async function callGemini(messages) {
  if (!geminiModel) throw new Error('GEMINI_API_KEY is missing from .env');

  const history = messages.slice(0, -1).map(m => ({
    role: m.sender === 'user' ? 'user' : 'model',
    parts: [{ text: m.text }],
  }));
  while (history.length && history[0].role !== 'user') history.shift();

  const lastMessage = messages[messages.length - 1];
  const chat = geminiModel.startChat({ history });
  const result = await chat.sendMessage(lastMessage.text);
  return result.response.text();
}

// ---------- Route ----------
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const replyText = PROVIDER === 'gemini'
      ? await callGemini(messages)
      : await callOllama(messages);

    res.json({ reply: replyText, provider: PROVIDER });
  } catch (err) {
    console.error(`${PROVIDER} error:`, err);

    const message = PROVIDER === 'gemini'
      ? (err.message?.includes('429')
          ? 'Gemini free-tier quota hit. Switch LLM_PROVIDER=ollama in .env, or wait for reset.'
          : 'Gemini request failed. Check GEMINI_API_KEY in .env.')
      : 'Ollama request failed. Is it running? (check for a background Ollama process)';

    res.status(500).json({ error: message, provider: PROVIDER });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT} — LLM_PROVIDER=${PROVIDER}`));
