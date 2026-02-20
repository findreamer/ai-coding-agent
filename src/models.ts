import type { LanguageModel } from 'ai';
import { ollama } from 'ollama-ai-provider-v2';

export const ollamaQwen3_4b_instruct_2507_q4_K_M: LanguageModel = ollama(
  'qwen3:4b-instruct-2507-q4_K_M',
);
