import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge pushed a firmware update at 3 a.m. and now it holds my milk hostage until I accept its terms and conditions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
