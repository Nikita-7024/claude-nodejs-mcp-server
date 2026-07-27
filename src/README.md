# Claude Node.js MCP Server

A production-ready Model Context Protocol (MCP) server built with **Node.js**, **TypeScript**, and the official **@modelcontextprotocol/sdk**.

It provides AI-powered developer tools that help understand, navigate, and document codebases through Claude Desktop.

---

## Features

- 📄 Project Summary
- 📖 Read File
- 🔍 Search Code
- 📝 Find TODOs
- 🌐 List Express Routes
- 🧠 Explain Code
- 📚 Generate Documentation
- 📦 Find Dependencies
- 🌳 Project Tree

---

## Tech Stack

- Node.js
- TypeScript
- Model Context Protocol (MCP)
- Claude Desktop
- Zod


## Installation

### Clone the repository

```bash
git clone https://github.com/Nikita-7024/claude-nodejs-mcp-server.git
cd claude-nodejs-mcp-server
```

### Install dependencies

```bash
npm install
```

### Build the project

```bash
npm run build
```

### Run in development

```bash
npm run dev
```

### Run production build

```bash
npm start
```

## Claude Desktop Configuration

Add the following to your Claude Desktop MCP configuration:

```json
{
  "mcpServers": {
    "claude-nodejs": {
      "command": "node",
      "args": [
        "/absolute/path/to/dist/index.js"
      ]
    }
  }
}
```

## Available Tools

| Tool | Description |
|------|-------------|
| project_summary | Summarize the project |
| read_file | Read any file |
| search_code | Search keyword across project |
| list_routes | Find Express routes |
| find_todos | Locate TODO/FIXME comments |
| explain_code | Explain a source file |
| generate_documentation | Generate documentation for a file |
| find_dependencies | List imported dependencies |
| project_tree | Display project folder structure |


## Example Prompts

Use these prompts inside Claude Desktop after connecting the MCP server.

### Project Overview

```text
Use project_summary
```

### Read a File

```text
Use read_file on src/server.ts
```

### Search Code

```text
Use search_code and search "registerTool"
```

### Find TODOs

```text
Use find_todos
```

### Explain a File

```text
Use explain_code on src/server.ts
```

### Generate Documentation

```text
Use generate_documentation on src/server.ts
```

### Find Dependencies

```text
Use find_dependencies on src/server.ts
```

### Display Project Structure

```text
Use project_tree
```

## Architecture

```text
                 Claude Desktop
                        │
                        ▼
              Model Context Protocol
                        │
                        ▼
              Node.js MCP Server
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
   File System     Code Analysis     Documentation
        │               │                │
        └───────────────┼────────────────┘
                        ▼
                   Tool Response
                        │
                        ▼
                 Claude AI Response
```


## Future Improvements

- GitHub repository integration
- Git diff analysis
- Code review assistant
- Test case generation
- API dependency graph
- Project health report
- Security scan
- Code metrics dashboard
- Multi-language support


## Author

**Nikita Singh**

GitHub: https://github.com/Nikita-7024

If you found this project useful, consider giving it a ⭐.