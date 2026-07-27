import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { summarizeProject } from "./tools/summarizeProject.js";
import { readFile } from "./tools/readFile.js";
import { searchCode } from "./tools/searchCode.js";
import { listRoutes } from "./tools/listRoutes.js";
import { findTodos } from "./tools/findTodos.js";
import { explainCode } from "./tools/explainCode.js";
import { generateDocumentation } from "./tools/generateDocumentation.js";
import { findDependencies } from "./tools/findDependencies.js";
import { projectTree } from "./tools/projectTree.js";
import type { ToolResponse } from "./types/index.js";

export const server = new McpServer({
  name: "claude-mcp-nodejs",
  version: "1.0.0",
});

// ---------------- Project Summary ----------------

server.registerTool(
  "project_summary",
  {
    title: "Project Summary",
    description: "Summarize the current project",
    inputSchema: {},
  },
  async () => {
    const summary = await summarizeProject();

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(summary, null, 2),
        },
      ],
    };
  }
);

// ---------------- Read File ----------------

server.registerTool(
  "read_file",
  {
    title: "Read File",
    description: "Read any file in the project",
    inputSchema: {
      path: z.string(),
    },
  },
  async ({ path }) => {
    const content = await readFile(path);

    return {
      content: [
        {
          type: "text",
          text: content,
        },
      ],
    };
  }
);

// ---------------- Search Code ----------------

server.registerTool(
  "search_code",
  {
    title: "Search Code",
    description: "Find files containing a keyword",
    inputSchema: {
      keyword: z.string(),
    },
  },
  async ({ keyword }) => {
    const files = await searchCode(keyword);

    return {
      content: [
        {
          type: "text",
          text: files.join("\n"),
        },
      ],
    };
  }
);

// ---------------- List Routes ----------------

server.registerTool(
  "list_routes",
  {
    title: "List Routes",
    description: "Locate Express routes",
    inputSchema: {},
  },
  async () => {
    const routes = await listRoutes();

    return {
      content: [
        {
          type: "text",
          text: routes.join("\n"),
        },
      ],
    };
  }
);

// ---------------- Find TODOs ----------------

server.registerTool(
  "find_todos",
  {
    title: "Find TODOs",
    description: "Locate TODO and FIXME comments",
    inputSchema: {},
  },
  async () => {
    const todos = await findTodos();

    return {
      content: [
        {
          type: "text",
          text: todos.join("\n"),
        },
      ],
    };
  }
);

// ---------------- Explain Code ----------------

server.registerTool(
  "explain_code",
  {
    title: "Explain Code",
    description: "Explain what a source code file does",
    inputSchema: {
      file: z.string(),
    },
  },
  async ({ file }) => {

    const result = await explainCode(file);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  }
);


// ---------------- Generate Documentation ----------------

server.registerTool(
  "generate_documentation",
  {
    title: "Generate Documentation",
    description: "Generate documentation for a source file",
    inputSchema: {
      file: z.string(),
    },
  },
  async ({ file }) => {
    const result = await generateDocumentation(file);

    return {
      content: [
        {
          type: "text",
          text: result,
        },
      ],
    };
  }
);

// ---------------- Find Dependencies ----------------

server.registerTool(
  "find_dependencies",
  {
    title: "Find Dependencies",
    description: "Find all imports used by a source file",
    inputSchema: {
      file: z.string(),
    },
  },
  async ({ file }) => {
   const result = await findDependencies(file);

    return {
      content: [
        {
          type: "text",
          text: result,
        },
      ],
    };
  }
);

// ---------------- Project Tree ----------------

server.registerTool(
  "project_tree",
  {
    title: "Project Tree",
    description: "Display the complete project folder structure",
    inputSchema: {},
  },
  async () => {
    const tree = await projectTree();

    return {
      content: [
        {
          type: "text",
          text: tree,
        },
      ],
    };
  }
);