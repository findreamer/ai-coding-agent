import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { stepCountIs, ToolLoopAgent } from 'ai';
import { tools } from '@/tools/index.ts';
import { writeFileToolInputSchema } from '@/tools/write-file.tool.ts';
import { ollamaQwen3_4b_instruct_2507_q4_K_M } from '../../src/models.ts';

const agent = new ToolLoopAgent({
  model: ollamaQwen3_4b_instruct_2507_q4_K_M,
  stopWhen: stepCountIs(1),
  tools: tools,
});

describe('write_file tool', async () => {
  it('should call write_file tool', async () => {
    const prompt =
      'create a new file "hello.txt" with content "Hello, World!"."';

    const { toolCalls } = await agent.generate({
      prompt,
    });

    // assert
    // 断言工具调用次数为1
    assert.ok(toolCalls.length === 1);

    // 校验输入参数
    assert.doesNotThrow(() =>
      writeFileToolInputSchema.parse(toolCalls[0]?.input),
    );

    // 断言工具调用名称为write_file
    assert.ok(toolCalls[0]?.toolName === 'write_file');
  });
});
