import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { stepCountIs, ToolLoopAgent } from 'ai';
import { tools } from '@/tools/index.ts';
import { listFilesToolInputSchema } from '@/tools/list-files.tool.ts';
import { ollamaQwen3_4b_instruct_2507_q4_K_M } from '../../src/models.ts';

const agent = new ToolLoopAgent({
  model: ollamaQwen3_4b_instruct_2507_q4_K_M,
  stopWhen: stepCountIs(1),
  tools: tools,
});

describe('list_files tool', async () => {
  it('should call list_files tool', async () => {
    const prompt = 'List all files in this project using the list_files tool';

    const { toolCalls } = await agent.generate({
      prompt,
    });

    // assert
    // 断言工具调用次数为1
    assert.ok(toolCalls.length === 1);

    // 校验输入参数
    assert.doesNotThrow(() =>
      listFilesToolInputSchema.parse(toolCalls[0]?.input),
    );

    // 断言工具调用名称为list_files
    assert.ok(toolCalls[0]?.toolName === 'list_files');
  });
});
