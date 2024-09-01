import { CssBaseline, useMediaQuery } from '@mui/material';
import {
  ThemeProvider as MuiThemeProvider,
  useColorScheme,
} from '@mui/material/styles';
import { FC, useMemo } from 'react';

import { darkTheme } from '../config/mui/darkTheme';
import { lightTheme } from '../config/mui/lightTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (
  props: ThemeProviderProps,
) => {
  const { children } = props;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { mode } = useColorScheme();
  const theme = useMemo(() => lightTheme || darkTheme, [mode, prefersDarkMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
