# str-emoji-hash

**[English](#english) · [简体中文](#简体中文) · [繁體中文](#繁體中文)**

Generate a stable emoji fingerprint string from any input. Same input always produces the same emoji sequence; different inputs produce different sequences.

Uses FNV-1a 32-bit hashing under the hood, so output is deterministic across Node versions and platforms.

- npm: `str-emoji-hash`
- GitHub Packages: `@jaychouchannel/str-emoji-hash`

---

## English

### Install

```bash
# from npmjs.com
npm install str-emoji-hash

# from GitHub Packages
npm install @jaychouchannel/str-emoji-hash
```

### Usage (Library)

```ts
import { emojiFingerprint } from "str-emoji-hash";

emojiFingerprint("hello");          // 20 emoji (default)
emojiFingerprint("hello", 8);       // 8 emoji
emojiFingerprint("你好世界");         // unicode-safe

emojiFingerprint("");                // throws: input must not be empty
```

### CLI

```bash
npx str-emoji-hash "hello"
# 🚀💡🍕🦋🌊...

npx str-emoji-hash "hello" 8
# 8-emoji fingerprint
```

### API

#### `emojiFingerprint(input: string, length?: number): string`

- `input` — any non-empty string
- `length` — number of emoji code points to output (default `20`)
- throws if `input` is empty

### License

MIT

---

## 简体中文

为任意字符串生成稳定的 emoji 指纹。相同输入始终得到相同的 emoji 序列，不同输入得到不同序列。

底层使用 FNV-1a 32 位哈希，输出在跨 Node 版本、跨平台上保持一致。

### 安装

```bash
# 从 npmjs.com
npm install str-emoji-hash

# 从 GitHub Packages
npm install @jaychouchannel/str-emoji-hash
```

### 用法（作为库）

```ts
import { emojiFingerprint } from "str-emoji-hash";

emojiFingerprint("hello");          // 默认 20 个 emoji
emojiFingerprint("hello", 8);       // 8 个 emoji
emojiFingerprint("你好世界");         // 兼容 unicode

emojiFingerprint("");                // 抛错：input must not be empty
```

### 命令行

```bash
npx str-emoji-hash "hello"
# 🚀💡🍕🦋🌊...

npx str-emoji-hash "hello" 8
# 8 个 emoji 的指纹
```

### API

#### `emojiFingerprint(input: string, length?: number): string`

- `input` — 任意非空字符串
- `length` — 输出 emoji 码位数量（默认 `20`）
- 当 `input` 为空时抛错

### 协议

MIT

---

## 繁體中文

為任意字串生成穩定的 emoji 指紋。相同輸入始終得到相同的 emoji 序列，不同輸入得到不同序列。

底層使用 FNV-1a 32 位元雜湊，輸出在跨 Node 版本、跨平台上保持一致。

### 安裝

```bash
# 從 npmjs.com
npm install str-emoji-hash

# 從 GitHub Packages
npm install @jaychouchannel/str-emoji-hash
```

### 用法（作為程式庫）

```ts
import { emojiFingerprint } from "str-emoji-hash";

emojiFingerprint("hello");          // 預設 20 個 emoji
emojiFingerprint("hello", 8);       // 8 個 emoji
emojiFingerprint("你好世界");         // 兼容 unicode

emojiFingerprint("");                // 拋出錯誤：input must not be empty
```

### 命令列

```bash
npx str-emoji-hash "hello"
# 🚀💡🍕🦋🌊...

npx str-emoji-hash "hello" 8
# 8 個 emoji 的指紋
```

### API

#### `emojiFingerprint(input: string, length?: number): string`

- `input` — 任意非空字串
- `length` — 輸出 emoji 碼位數量（預設 `20`）
- 當 `input` 為空時拋出錯誤

### 授權條款

MIT
