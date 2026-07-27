import fs from "node:fs/promises";
import path from "node:path";

async function walk(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  let files: string[] = [];

  for (const entry of entries) {
    if (
      entry.name === "node_modules" ||
      entry.name === "dist"
    ) {
      continue;
    }

    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await walk(full));
    } else {
      files.push(full);
    }
  }

  return files;
}

export async function listRoutes() {
    const projectRoot = "C:\\Users\\niku8\\Desktop\\claude-mcp-nodejs";

  const files = await walk(projectRoot);

  const routes: string[] = [];

  const regex =
    /(app|router)\.(get|post|put|delete|patch)\(/g;

  for (const file of files) {
    try {
      const text = await fs.readFile(file, "utf8");

      if (regex.test(text)) {
        routes.push(path.relative(projectRoot, file));
      }
    } 
    catch (error) {
  throw new Error(
    `Failed to process ${file}: ${
      error instanceof Error ? error.message : String(error)
    }`
  );
}
  }

  return routes;
}