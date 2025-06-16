import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { describe, expect, it } from "vitest";
import {
  prepareSseMcpClient,
  prepareStreamableHttpMcpClient,
} from "../../helpers/mcp-client-helper";

describe("test add-tool", () => {
  it("test call add-tool by sse", async () => {
    // arrange
    const { client, transport } = prepareSseMcpClient();
    await client.connect(transport);

    // act
    const res = (await client.callTool({
      name: "add",
      arguments: {
        a: 5,
        b: 3,
      },
    })) as CallToolResult;

    // assert
    expect(res.content).length(1);
    expect(res.content[0].type).toBe("text");
    expect(res.content[0].text).toBe("5 + 3 = 8");
  });

  it("test call add-tool by streamable-http", async () => {
    // arrange
    const { client, transport } = prepareStreamableHttpMcpClient();
    await client.connect(transport);

    // act
    const res = (await client.callTool({
      name: "add",
      arguments: {
        a: 5,
        b: 3,
      },
    })) as CallToolResult;

    // assert
    expect(res.content).length(1);
    expect(res.content[0].type).toBe("text");
    expect(res.content[0].text).toBe("5 + 3 = 8");
  });
});
