import { agent } from './agents.ts';

const res = await agent.generate({
  prompt: '总结 package.json，并写入README.md文件 ',
});

console.log(res.text);
