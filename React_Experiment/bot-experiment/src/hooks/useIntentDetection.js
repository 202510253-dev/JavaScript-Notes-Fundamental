// Simple keyword-based intent detection.
// Good enough for MVP -- swap for LLM function-calling later if you want it robust.

export function detectPlayIntent(message) {
  const playPattern = /play (.+)/i;
  const match = message.match(playPattern);
  return match ? match[1].trim() : null;
}
