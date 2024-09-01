import { CssBaseline, useMediaQuery } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, useColorScheme } from '@mui/material/styles';
import { FC, useMemo } from 'react';
import { lightTheme, darkTheme } from '../config/mui';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const {
    children,
  } = props;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { mode } = useColorScheme();
  const theme = useMemo(() => lightTheme, [mode, prefersDarkMode]);

  return (
    <MuiThemeProvider
      theme={theme}
    >
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
};
