import { readFile } from 'node:fs/promises';
import { tool } from 'ai';
import z from 'zod';

export const readFileToolInputSchema = z.object({
  path: z.string().describe('The path of the file to read.'),
  reason: z.string().describe('Brief explanation for the useage.'),
});

export const readFileTool = tool({
  description:
    'Access and read the content of a file at the specified path. Use this tool when you need to read the content of a file.',
  inputSchema: readFileToolInputSchema,
  execute: async ({ path }) => {
    // 读取文件内容
    try {
      return await readFile(path, 'utf8');
    } catch {
      return `Error: file not found.`;
    }
  },
});
