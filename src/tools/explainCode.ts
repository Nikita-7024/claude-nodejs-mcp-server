import fs from "node:fs/promises";
import path from "node:path";

export async function explainCode(filePath: string) {

  const projectRoot =
    "C:\\Users\\niku8\\Desktop\\claude-mcp-nodejs";

  const fullPath = path.join(projectRoot, filePath);

  const code = await fs.readFile(fullPath, "utf8");


  return {
    file: filePath,
    lines: code.split("\n").length,
    explanation: `
This file contains ${code.split("\n").length} lines of code.

Main purpose:
${filePath}

Structure:
- Imports dependencies
- Defines logic/functions
- Exports functionality

Code preview:
${code.substring(0,500)}
`
  };
}