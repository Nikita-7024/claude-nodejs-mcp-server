import { server } from "./server.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const transport = new StdioServerTransport();

console.error(
  "TOOLS:",
  Object.keys((server as any)._registeredTools)
);

await server.connect(transport);

console.error(
  "TOOLS:",
  Object.keys((server as any)._registeredTools)
);

console.error("✅ MCP Server Started");