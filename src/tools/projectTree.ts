import fs from "node:fs/promises";
import path from "node:path";

import { PROJECT_ROOT } from "../config/constants.js";

async function buildTree(dir: string, prefix = ""): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const filtered = entries.filter(
    (e) =>
      !["node_modules", ".git", "dist"].includes(e.name)
  );

  const lines: string[] = [];

  for (let i = 0; i < filtered.length; i++) {
    const entry = filtered[i];
    const isLast = i === filtered.length - 1;

    const connector = isLast ? "└── " : "├── ";

    lines.push(prefix + connector + entry.name);

    if (entry.isDirectory()) {
      lines.push(
        ...(await buildTree(
          path.join(dir, entry.name),
          prefix + (isLast ? "    " : "│   ")
        ))
      );
    }
  }

  return lines;
}

export async function projectTree() {
  const tree = await buildTree(PROJECT_ROOT);

  return [
    path.basename(PROJECT_ROOT),
    ...tree,
  ].join("\n");
}