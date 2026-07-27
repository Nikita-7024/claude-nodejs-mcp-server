import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export async function summarizeProject() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const projectRoot = path.resolve(__dirname, "../../");

  const packagePath = path.join(projectRoot, "package.json");

  const pkg = JSON.parse(await fs.readFile(packagePath, "utf8"));

  return {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    scripts: pkg.scripts,
    dependencies: Object.keys(pkg.dependencies ?? {}),
    devDependencies: Object.keys(pkg.devDependencies ?? {})
  };
}