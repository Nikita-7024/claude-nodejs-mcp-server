import fs from "node:fs/promises";
import path from "node:path";

import { PROJECT_ROOT } from "../config/constants.js";

export async function findDependencies(file: string) {
  const fullPath = path.join(PROJECT_ROOT, file);

  const code = await fs.readFile(fullPath, "utf8");

  const dependencies: string[] = [];

  const importRegex =
    /import\s+.*?\s+from\s+["'](.+?)["']/g;

  let match;

  while ((match = importRegex.exec(code)) !== null) {
    dependencies.push(match[1]);
  }

  const external: string[] = [];
const local: string[] = [];

for (const dep of dependencies) {
  if (dep.startsWith(".") || dep.startsWith("/")) {
    local.push(path.basename(dep, path.extname(dep)));
  } else {
    external.push(dep);
  }
}

return `
📦 External Packages
-------------------
${external.join("\n") || "None"}

📁 Local Modules
----------------
${local.join("\n") || "None"}

Total External : ${external.length}
Total Local    : ${local.length}
`;
}