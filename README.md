# file-mime-guard — Validate File MIME Types in Node.js (Upload Security)

[![npm version](https://img.shields.io/npm/v/file-mime-guard)](https://www.npmjs.com/package/file-mime-guard)
[![types](https://img.shields.io/npm/types/file-mime-guard)](https://www.npmjs.com/package/file-mime-guard)
[![TypeScript](https://img.shields.io/badge/TypeScript-yes-blue)](https://www.typescriptlang.org/)
[![downloads](https://img.shields.io/npm/dm/file-mime-guard)](https://www.npmjs.com/package/file-mime-guard)
[![GitHub Stars](https://img.shields.io/github/stars/vocallab-ai/file-mime-guard)](https://github.com/vocallab-ai/file-mime-guard)

Validate file MIME types in Node.js and JavaScript.
Protect your backend from invalid or malicious uploads by checking file types before processing.

Perfect for upload validation, API security, and media pipelines.
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

## Use Cases

- Validate file uploads in Node.js APIs (Express, Fastify)
- Prevent users from uploading unsupported or dangerous file types
- Restrict uploads to audio, image, or video formats
- Add security checks before storing files or processing them
- Protect transcription or media pipelines from invalid input


## Why file-mime-guard?

Most file upload handlers trust user input — which can be unsafe.

This package provides a simple way to enforce allowed MIME types and prevent invalid or malicious uploads.

## Related

Building voice apps or audio tools?

👉 https://www.vocallab.ai — generate voiceovers and captions from text
## License

MIT

## Keywords

- validate file upload nodejs
- check mime type javascript
- file upload security node js
- prevent invalid file upload
- mime type validation npm
