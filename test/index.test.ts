import { describe, it, expect } from "vitest";
import { emojiFingerprint } from "../src/index.js";

describe("emojiFingerprint", () => {
  it("returns stable output for same input", () => {
    expect(emojiFingerprint("hello")).toBe(emojiFingerprint("hello"));
  });

  it("produces different output for different input", () => {
    expect(emojiFingerprint("abc")).not.toBe(emojiFingerprint("def"));
  });

  it("defaults to length 20 emoji code points", () => {
    expect(Array.from(emojiFingerprint("x")).length).toBe(20);
  });

  it("respects custom length", () => {
    expect(Array.from(emojiFingerprint("x", 5)).length).toBe(5);
  });

  it("throws on empty input", () => {
    expect(() => emojiFingerprint("")).toThrow("input must not be empty");
  });

  it("handles unicode input", () => {
    expect(emojiFingerprint("你好世界")).toBe(emojiFingerprint("你好世界"));
  });
});
