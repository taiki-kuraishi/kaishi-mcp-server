import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { inject, injectable, singleton } from "tsyringe";
import { AddTool } from "../tools/add-tool";

@singleton()
@injectable()
export class KaishiMcpServer extends McpServer {
  constructor(@inject(AddTool) private readonly addTool: AddTool) {
    super({
      name: "kaishi-mcp-server",
      version: "1.0.0",
    });

    this.addTool.register(this);
  }
}
