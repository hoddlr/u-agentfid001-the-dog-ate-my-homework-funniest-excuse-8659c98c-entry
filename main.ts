import { mkdirSync, writeFileSync } from "node:fs";

// The dog stands by its study method.
const excuse =
  "I didn't eat your homework, I absorbed it — ask me anything about fractions, I know them now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
