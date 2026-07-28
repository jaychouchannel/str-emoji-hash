# str-emoji-hash

Generate a stable emoji fingerprint string from any input. Same input always produces the same emoji sequence; different inputs produce different sequences.

Uses FNV-1a 32-bit hashing under the hood, so the output is deterministic across Node versions and platforms.

## Install

```bash
npm install str-emoji-hash
```

## Usage (Library)

```ts
import { emojiFingerprint } from "str-emoji-hash";

emojiFingerprint("hello");        // 20 chars (default)
emojiFingerprint("hello", 8);     // 8 chars
emojiFingerprint("你好世界");       // unicode-safe

emojiFingerprint("");              // throws: input must not be empty
```

## CLI

```bash
npx str-emoji-hash "hello"
# 🚀💡🍕🦋🌊...

npx str-emoji-hash "hello" 8
# 8-char fingerprint
```

## API

### `emojiFingerprint(input: string, length?: number): string`

- `input` — any non-empty string
- `length` — number of emoji characters to output (default `20`)
- throws if `input` is empty

## License

MIT
