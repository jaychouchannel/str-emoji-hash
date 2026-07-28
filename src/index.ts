const palette = [
  "😀", "😎", "🚀", "🔥", "⭐", "🎉", "💡", "🌈", "🍕", "🐱",
  "🌊", "🦋", "🍀", "🎵", "💎", "🌟", "🪐", "🎮", "🧩", "🔮",
  "🍎", "🌻", "🦊", "🎈", "🦄", "🍊", "🌺", "🐙", "🎯", "🧲",
  "🫧", "🍋", "🦚", "🎪", "🧸", "🐢", "💫", "🌼", "🦁", "🥑",
  "🍇", "🐶", "🎲", "🫠", "💝", "🦑", "🌙", "🐝", "🍓", "🧡",
  "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "🩶", "💔", "❣",
  "💕", "💗", "💖", "💘", "💝", "💞", "💓", "💟", "♥", "🪽",
  "🪴", "🧃", "🫒", "🪻", "🫐", "🫎", "🫏", "🪼", "🤖", "👻",
  "👽", "🤠", "🥸", "😈", "👹", "👺", "💀", "🦄", "🎭",
];

export function emojiFingerprint(input: string, length = 20): string {
  if (input.length === 0) {
    throw new Error("input must not be empty");
  }

  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  const unsigned = hash >>> 0;

  let result = "";
  let remaining = unsigned;
  for (let i = 0; i < length; i++) {
    result += palette[remaining % palette.length];
    remaining = Math.floor(remaining / palette.length);
  }
  return result;
}
