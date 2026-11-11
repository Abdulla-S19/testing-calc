// Appends rate constants to calc.ts. Skips any line that is already present,
// so running the script more than once does not duplicate them.
const fs = require("fs");
const path = require("path");

const target = path.join(__dirname, "..", "calc.ts");
const lines = [
  "export const RATE_A = 0.1;",
  "export const RATE_B = 0.2;",
  "export const RATE_C = 0.3;",
];

let content = fs.readFileSync(target, "utf8");
const missing = lines.filter((line) => !content.includes(line));

if (missing.length === 0) {
  console.log("calc.ts already contains all rate constants; nothing to do.");
} else {
  const separator = content.endsWith("\n") ? "" : "\n";
  fs.appendFileSync(target, separator + missing.join("\n") + "\n");
  console.log(`Appended ${missing.length} line(s) to calc.ts.`);
}
