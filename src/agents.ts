import { stepCountIs, ToolLoopAgent } from 'ai';
import { ollamaQwen3_4b_instruct_2507_q4_K_M } from './models.ts';
import { tools } from './tools/index.ts';

export const agent = new ToolLoopAgent({
  model: ollamaQwen3_4b_instruct_2507_q4_K_M,
  stopWhen: stepCountIs(5),
  tools: tools,
});
