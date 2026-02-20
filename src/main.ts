// curl http://localhost:11434/api/generate -d '{
//   "model": "gemma3",
//   "prompt": "Why is the sky blue?"
// }'

await fetch('http://localhost:11434/api/generate', {
  method: 'POST',
  body: JSON.stringify({
    model: 'qwen3:4b-instruct-2507-q4_K_M',
    prompt: 'Why is the sky blue?',
  }),
});

// 流式信息
const response = await fetch('http://localhost:11434/api/generate', {
  method: 'POST',
  body: JSON.stringify({
    model: 'qwen3:4b-instruct-2507-q4_K_M',
    prompt: '为什么天空是蓝色的?',
  }),
});

if (!response.body) process.exit(1);

const decoderStream = new TextDecoderStream();

const stream = response.body.pipeThrough(decoderStream);

for await (const chunk of stream) {
  const json = JSON.parse(chunk);
  process.stdout.write(json.response);
}
process.stdout.write('\n');
