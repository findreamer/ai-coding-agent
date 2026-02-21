import {
  defaultTheme,
  extendTheme,
  ProgressBar,
  ThemeProvider,
} from '@inkjs/ui';
import { Box, type TextProps, useInput } from 'ink';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { Hero } from './Hero.tsx';
import { Messages } from './Messages.tsx';
import { Usage } from './Useage.tsx';
import { UserInput } from './UserInput.tsx';

const store = {
  subscribe: (callback: () => void) => {
    process.stdout.on('resize', callback);
    return () => {
      process.stdout.off('resize', callback);
    };
  },
  getRows: () => process.stdout.rows,
};

const customTheme = extendTheme(defaultTheme, {
  components: {
    ProgressBar: {
      styles: {
        completed: (): TextProps => ({
          color: 'redBright',
        }),
        container: () => ({
          flexGrow: 1,
          minWidth: 15,
        }),
      },
    },
  },
});

export function App() {
  const rows = useSyncExternalStore(store.subscribe, store.getRows);

  return (
    <ThemeProvider theme={customTheme}>
      <Box flexDirection="column" height={rows - 1}>
        {/* 头部 */}
        <Hero />
        {/* 消息列表 */}
        <Messages />
        {/* 用量统计 */}
        <Usage />
        {/* 用户输入 */}
        <UserInput />
      </Box>
    </ThemeProvider>
  );
}
