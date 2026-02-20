import { agent } from './agents.ts';

const res = await agent.generate({
  prompt: 'Wath is system current date time?',
});

console.log(res.toolCalls);
console.log(res.text);
