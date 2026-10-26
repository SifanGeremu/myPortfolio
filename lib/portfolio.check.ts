import assert from "node:assert/strict";
import { filterByGroup, splitMarked } from "./portfolio.ts";

const parts = splitMarked("Built with TypeScript, Next.js, and Motion.", ["Motion", "Next.js", "TypeScript"]);
assert.deepEqual(
  parts.filter((part) => part.mark).map((part) => part.text),
  ["TypeScript", "Next.js", "Motion"],
);

const plain = splitMarked("Nothing to mark.", []);
assert.equal(plain.length, 1);
assert.equal(plain[0]?.mark, false);

const skills = [
  { name: "React", group: "Frontend" },
  { name: "Postgres", group: "Backend" },
];
assert.equal(filterByGroup(skills, "All").length, 2);
assert.deepEqual(
  filterByGroup(skills, "Backend").map((skill) => skill.name),
  ["Postgres"],
);

console.log("portfolio check ok");
