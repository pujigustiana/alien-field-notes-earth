import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Visited Earth for the beaches, stayed for the birthday ritual: locals set a cake on fire, sing at it, then blow it out and call it a wish. Five stars, would be sung at again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
