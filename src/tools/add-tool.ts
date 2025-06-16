import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { injectable, singleton } from "tsyringe";
import { z } from "zod";
import { AbstractTool } from "./abstract-tool";

@singleton()
@injectable()
export class AddTool extends AbstractTool {
  register(server: McpServer): void {
    server.tool(
      "add",
      "Adds two numbers together.",
      {
        a: z.number().describe("First number to add"),
        b: z.number().describe("Second number to add"),
      },
      async ({ a, b }) => ({
        content: [
          {
            type: "text",
            text: `${a} + ${b} = ${a + b}`,
          },
        ],
      }),
    );
  }
}
