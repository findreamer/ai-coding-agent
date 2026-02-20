import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { stepCountIs, ToolLoopAgent } from 'ai';
import { tools } from '@/tools/index.ts';
import { ollamaQwen3_4b_instruct_2507_q4_K_M } from '../src/models.ts';

const agent = new ToolLoopAgent({
  model: ollamaQwen3_4b_instruct_2507_q4_K_M,
  stopWhen: stepCountIs(1),
  tools: tools,
});

describe('One turn tools evals', async () => {
  it('should call get_system_date_time tool', async () => {
    const prompt = 'Wath is system current date time?';

    const { toolCalls } = await agent.generate({
      prompt,
    });

    // assert
    // 断言工具调用次数为1
    assert.ok(toolCalls.length === 1);
    // 断言工具调用名称为get_system_date_time
    assert.ok(toolCalls[0]?.toolName === 'get_system_date_time');
  });
});
