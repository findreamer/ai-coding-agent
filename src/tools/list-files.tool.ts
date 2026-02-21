import { tool } from 'ai';
import { globby } from 'globby';
import z from 'zod';

export const listFilesToolInputSchema = z.object({
  directory: z
    .string()
    .describe(
      'The  directory path to list content of . Suppport glob pattern.',
    ),
  reason: z.string().describe('Brief explanation for the useage.'),
});

export const listFilesTool = tool({
  description:
    "list files and directories in the specified directory path. Use this tool to access user's project  working directory and list files in the current directory.",
  inputSchema: listFilesToolInputSchema,
  execute: async ({ directory }) => {
    // 读取文件内容
    try {
      const paths = await globby(directory, { gitignore: true });
      return paths.join('\n');
    } catch {
      return `Error: directory is not found; `;
    }
  },
});
