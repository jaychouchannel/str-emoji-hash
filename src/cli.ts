#!/usr/bin/env node
import { emojiFingerprint } from "./index.js";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: str-emoji-hash <input> [length]");
  process.exit(1);
}

try {
  const length = args[1] ? Number(args[1]) : 20;
  if (Number.isNaN(length) || length < 1) {
    console.error("Error: length must be a positive integer");
    process.exit(1);
  }
  console.log(emojiFingerprint(args[0], length));
} catch (e) {
  console.error(`Error: ${(e as Error).message}`);
  process.exit(1);
}
