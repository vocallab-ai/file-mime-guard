# file-mime-guard

A tiny utility to validate file MIME types in Node.js.

Useful for upload validation, backend checks, and media processing pipelines.

## Features

- Check whether a MIME type is allowed
- Validate uploaded files against an allowlist
- Simple and predictable API
- Lightweight helper for backend services

## Install

```bash
npm install file-mime-guard
```

## Usage

```ts
import { isAllowedMimeType } from "file-mime-guard";

const allowed = isAllowedMimeType("audio/wav", [
  "audio/wav",
  "audio/mpeg",
  "audio/webm",
]);

console.log(allowed); // true
```

## API

### `isAllowedMimeType(mimeType: string, allowed: string[]): boolean`

Returns `true` if the MIME type exists in the allowed list.

### `assertMimeType(mimeType: string, allowed: string[]): void`

Throws an error if the MIME type is not allowed.

## Example

```ts
import { assertMimeType } from "file-mime-guard";

assertMimeType("audio/mpeg", [
  "audio/wav",
  "audio/mpeg",
]);

console.log("File type is valid");
```

## Use cases

- Validate uploaded files
- Restrict unsupported audio formats
- Protect backend upload endpoints
- Add simple checks before transcription or processing

## Related

For larger voice workflows and hosted tools, see [vocallab.ai](https://vocallab.ai).

## License

MIT
