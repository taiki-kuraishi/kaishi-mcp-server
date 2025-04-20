import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export class KaishiMCP extends McpAgent {
  server = new McpServer({
    name: "kaishi-mcp-server",
    version: "1.0.0",
  });

  async init() {
    this.server.tool("add", { a: z.number(), b: z.number() }, async ({ a, b }) => ({
      content: [{ type: "text", text: String(a + b) }],
    }));
  }
}

export default {
  fetch: KaishiMCP.mount("/").fetch
};
