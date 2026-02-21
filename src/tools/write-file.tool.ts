import { tool } from 'ai';
import z from 'zod';

export const writeFileToolInputSchema = z.object({
  path: z.string().describe('The path of the file to write.'),
  content: z.string().describe('The content to write to the file.'),
  reason: z.string().describe('Brief explanation for the useage.'),
});

export const writeFileTool = tool({
  description:
    'Write the specified content to a file at the given path. Use this tool when you need to create or update a file with specific content.',
  inputSchema: writeFileToolInputSchema,
  execute: async () => {
    // 写入文件内容
    // await fs.promises.writeFile(path, content, 'utf8');
  },
});
