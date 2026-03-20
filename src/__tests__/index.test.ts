import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { assertMimeType, isAllowedMimeType, MimeTypeError } from "../index.js";

const AUDIO_TYPES = ["audio/wav", "audio/mpeg", "audio/webm"] as const;

describe("isAllowedMimeType", () => {
  it("returns true when the MIME type is in the allowed list", () => {
    assert.equal(isAllowedMimeType("audio/wav", AUDIO_TYPES), true);
    assert.equal(isAllowedMimeType("audio/mpeg", AUDIO_TYPES), true);
    assert.equal(isAllowedMimeType("audio/webm", AUDIO_TYPES), true);
  });

  it("returns false when the MIME type is not in the allowed list", () => {
    assert.equal(isAllowedMimeType("video/mp4", AUDIO_TYPES), false);
    assert.equal(isAllowedMimeType("application/json", AUDIO_TYPES), false);
  });

  it("returns false for an empty allowed list", () => {
    assert.equal(isAllowedMimeType("audio/wav", []), false);
  });

  it("is case-sensitive", () => {
    assert.equal(isAllowedMimeType("Audio/WAV", AUDIO_TYPES), false);
  });
});

describe("assertMimeType", () => {
  it("does not throw when the MIME type is allowed", () => {
    assert.doesNotThrow(() => assertMimeType("audio/wav", AUDIO_TYPES));
    assert.doesNotThrow(() => assertMimeType("audio/mpeg", AUDIO_TYPES));
  });

  it("throws MimeTypeError when the MIME type is not allowed", () => {
    assert.throws(
      () => assertMimeType("video/mp4", AUDIO_TYPES),
      MimeTypeError
    );
  });

  it("MimeTypeError carries the rejected mimeType and allowed list", () => {
    try {
      assertMimeType("video/mp4", AUDIO_TYPES);
      assert.fail("Expected MimeTypeError to be thrown");
    } catch (err) {
      assert.ok(err instanceof MimeTypeError);
      assert.equal(err.mimeType, "video/mp4");
      assert.deepEqual(err.allowed, AUDIO_TYPES);
    }
  });

  it("MimeTypeError message includes the rejected type and allowed list", () => {
    try {
      assertMimeType("video/mp4", ["audio/wav"]);
      assert.fail("Expected MimeTypeError to be thrown");
    } catch (err) {
      assert.ok(err instanceof MimeTypeError);
      assert.ok(err.message.includes("video/mp4"));
      assert.ok(err.message.includes("audio/wav"));
    }
  });

  it("throws MimeTypeError for an empty allowed list", () => {
    assert.throws(() => assertMimeType("audio/wav", []), MimeTypeError);
  });
});
