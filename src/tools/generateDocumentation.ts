import fs from "node:fs/promises";
import path from "node:path";

import { PROJECT_ROOT } from "../config/constants.js";

export async function generateDocumentation(file: string) {
  const fullPath = path.join(PROJECT_ROOT, file);

  const code = await fs.readFile(fullPath, "utf8");

    return `
        Generate complete developer documentation for the following file.

        Include:
        - Purpose
        - Responsibilities
        - Functions
        - Dependencies
        - Workflow
        - Summary

        Source Code:

        ${code}
        `;
}