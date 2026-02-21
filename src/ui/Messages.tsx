import { Badge, Spinner } from '@inkjs/ui';
import { Box, Text } from 'ink';
import type { ReactNode } from 'react';

function UserMessage({ children }: { children: ReactNode }) {
  return (
    <Box justifyContent="flex-end">
      <Box gap={2} borderStyle={'round'} paddingX={1} borderDimColor>
        <Text>{children}</Text>
        <Badge color={'redBright'}>ME</Badge>
      </Box>
    </Box>
  );
}

function AIMessage({ children }: { children: ReactNode }) {
  return (
    <Box gap={2} paddingX={1} borderDimColor width={'80%'}>
      <Badge color={'blueBright'}>AI</Badge>
      <Text>{children}</Text>
    </Box>
  );
}

function Thinking() {
  return (
    <Box gap={2}>
      <Spinner label="Thinking..." type="point"></Spinner>
    </Box>
  );
}

export function Messages() {
  return (
    <Box flexDirection="column" flexGrow={1} gap={1}>
      <UserMessage>你好?</UserMessage>
      <Thinking />
      <AIMessage>你好! 我是 AI 编码助手</AIMessage>
    </Box>
  );
}
