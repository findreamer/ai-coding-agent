import { createInterface } from 'node:readline/promises';
import type { ModelMessage } from 'ai';
import { agent } from './agents.ts';

const history: ModelMessage[] = [];

// node 自带的输入工具
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

while (true) {
  const ask = await rl.question('请输入: ');

  if (!ask.trim()) {
    break;
  }

  const userMessage: ModelMessage = {
    role: 'user',
    content: ask,
  };

  const { response, text } = await agent.generate({
    messages: [...history, userMessage],
  });

  console.log(text);

  history.push(userMessage);
  history.push(...response.messages);
}

rl.close();
