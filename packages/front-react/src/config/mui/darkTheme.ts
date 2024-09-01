import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
      contrastText: '#000000',
    },
    secondary: {
      main: '#03dac6',
      contrastText: '#000000',
    },
    error: {
      main: '#cf6679',
      contrastText: '#000000',
    },
    warning: {
      main: '#fbc02d',
      contrastText: '#000000',
    },
    info: {
      main: '#81d4fa',
      contrastText: '#000000',
    },
    success: {
      main: '#4caf50',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    button: { textTransform: 'none' },
  },
  shape: {
    borderRadius: 8,
  },
});
