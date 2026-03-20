/**
 * Error thrown when a MIME type is not in the allowed list.
 */
export class MimeTypeError extends Error {
  /** The MIME type that was rejected. */
  readonly mimeType: string;
  /** The list of allowed MIME types at the time of the check. */
  readonly allowed: readonly string[];

  constructor(mimeType: string, allowed: readonly string[]) {
    super(
      `MIME type "${mimeType}" is not allowed. Allowed types: ${allowed.join(", ")}`
    );
    this.name = "MimeTypeError";
    this.mimeType = mimeType;
    this.allowed = allowed;

    // Restore prototype chain for `instanceof` checks across transpilation boundaries.
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Returns `true` if `mimeType` is present in the `allowed` list.
 *
 * The comparison is case-sensitive, as MIME types are defined to be
 * case-insensitive in the spec but are conventionally lowercase. Pass
 * normalised (lowercase) values for reliable results.
 *
 * @param mimeType - The MIME type to test, e.g. `"audio/mpeg"`.
 * @param allowed  - The list of permitted MIME types.
 *
 * @example
 * isAllowedMimeType("audio/wav", ["audio/wav", "audio/mpeg"]); // true
 * isAllowedMimeType("video/mp4", ["audio/wav", "audio/mpeg"]); // false
 */
export function isAllowedMimeType(
  mimeType: string,
  allowed: readonly string[]
): boolean {
  return allowed.includes(mimeType);
}

/**
 * Asserts that `mimeType` is present in the `allowed` list.
 * Throws a {@link MimeTypeError} if it is not.
 *
 * @param mimeType - The MIME type to validate, e.g. `"audio/mpeg"`.
 * @param allowed  - The list of permitted MIME types.
 *
 * @throws {MimeTypeError} When `mimeType` is not in `allowed`.
 *
 * @example
 * assertMimeType("audio/mpeg", ["audio/wav", "audio/mpeg"]); // ok
 * assertMimeType("video/mp4",  ["audio/wav", "audio/mpeg"]); // throws MimeTypeError
 */
export function assertMimeType(
  mimeType: string,
  allowed: readonly string[]
): void {
  if (!isAllowedMimeType(mimeType, allowed)) {
    throw new MimeTypeError(mimeType, allowed);
  }
}
