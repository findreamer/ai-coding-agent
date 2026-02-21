import fs from 'node:fs';
import { tool } from 'ai';
import z from 'zod';

export const listFilesToolInputSchema = z.object({
  directory: z.string().describe('The path of the directory to list files.'),
  reason: z.string().describe('Brief explanation for the useage.'),
});

export const listFilesTool = tool({
  description:
    "list files and directories in the specified directory path. Use this tool to access user's project  working directory and list files in the current directory.",
  inputSchema: listFilesToolInputSchema,
  execute: async () => {
    // 读取文件内容
    // const content = await fs.promises.readFile(path, 'utf8');
    // return content;
  },
});
