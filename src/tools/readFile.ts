import fs from "node:fs/promises";
import path from "node:path";

export async function readFile(filePath: string) {
  const projectRoot = "C:\\Users\\niku8\\Desktop\\claude-mcp-nodejs";

  const absolutePath = path.resolve(projectRoot, filePath);

  return await fs.readFile(absolutePath, "utf8");
}