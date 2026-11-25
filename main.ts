import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const line = "Day 12 of you opening me just to stare. I've started charging the milk rent. The leftovers from October say hi — they're a civilization now.";

const sourceDirectory = fileURLToPath(new URL(".", import.meta.url));
const outputDirectory = resolve(sourceDirectory, process.env.MAKEFUN_OUTPUT_DIR || "/output");
const outputFile = resolve(outputDirectory, "entry.txt");

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, line + "\n", "utf8");

const characterCount = readFileSync(outputFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(`Entry must contain 1–200 characters after trimming; found ${characterCount}.`);
}
