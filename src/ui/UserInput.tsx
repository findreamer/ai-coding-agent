import { TextInput } from '@inkjs/ui';
import { Box } from 'ink';

export function UserInput() {
  return (
    <Box borderStyle="round" borderColor="redBright" paddingX={2} paddingY={1}>
      <TextInput placeholder="请输入..." />
    </Box>
  );
}
