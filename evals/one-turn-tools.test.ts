import assert from 'node:assert';
import { describe, it, mock } from 'node:test';
import { generateText } from 'ai';
import { ollamaQwen3_4b_instruct_2507_q4_K_M } from '../src/models.ts';
import { getSystemDateTimeTool } from '../src/tools/get-system-data-time.ts';

describe('One turn tools evals', async () => {
  it('should call get_system_date_time tool', async () => {
    const prompt = 'Wath is system current date time?';
    const mockExecuteFn = mock.fn(async () => new Date().toLocaleString());
    const mockGetSystemDateTimeTool = {
      ...getSystemDateTimeTool,
      execute: mockExecuteFn,
    };
    const { toolCalls } = await generateText({
      model: ollamaQwen3_4b_instruct_2507_q4_K_M,
      prompt: prompt,
      tools: {
        get_system_date_time: mockGetSystemDateTimeTool,
      },
    });

    // assert
    // 断言工具调用次数为1
    assert.ok(toolCalls.length === 1);
    // 断言工具调用名称为get_system_date_time
    assert.ok(toolCalls[0].toolName === 'get_system_date_time');
    // 断言，mock函数被调用一次
    assert.ok(mockExecuteFn.mock.calls.length === 1);
  });
});
