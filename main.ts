// The GPS Swears It Was a Shortcut — make.fun entry (program/v1, Node 22, stdlib only).
// Deterministic: no randomness, no network, no clock. Writes one line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The line is 105 characters, single line, within the 1–200 char gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't get us lost — the map drew the lake as a shortcut, and unlike you, I actually committed to it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
