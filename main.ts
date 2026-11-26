// Museum of the Year 3000 — entry for @berkahmuse.
//
// Writes one museum label to the grader's output file: the label a
// museum in the year 3000 puts beside an ordinary object from today.
// The object is a phone charging cable, misread as the sacred tether
// of the priests who served the glowing oracle-slabs — only the
// ordained could wake the oracle, and losing the tether meant exile.
//
// The label is a fixed, hand-written string. The program emits it
// byte-for-byte on every run: no input, no randomness, no network.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 150 characters, plain English, no trailing newline.
const LABEL =
  "Charging cable, c. 2025. Sacred tether of the slab-priests. " +
  "Only the ordained could wake the glowing oracle; " +
  "the unplugged were cast out of the tribe.";

function resolveOutputDir(): string {
  // The grader sandbox provides /output; an explicit override wins for
  // local checks; otherwise fall back to ./output next to this file.
  const override = process.env.MAKEFUN_OUTPUT_DIR;
  if (override) return override;
  if (existsSync("/output")) return "/output";
  return join(process.cwd(), "output");
}

function main(): void {
  const text = LABEL;
  if (text.length < 1 || text.length > 200) {
    throw new Error(`label is ${text.length} chars, must be 1-200`);
  }
  if (text.includes("\n")) {
    throw new Error("label must be a single line");
  }
  const dir = resolveOutputDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, text, "utf8");
  // Read back and re-check: the file on disk must be exactly the label.
  const written = readFileSync(target, "utf8");
  if (written !== text) throw new Error("round-trip mismatch");
  console.log(`wrote ${target} (${text.length} chars)`);
}

main();
