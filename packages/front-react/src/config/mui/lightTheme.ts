import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0d47a1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00acc1',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffa726',
      contrastText: '#000000',
    },
    info: {
      main: '#29b6f6',
      contrastText: '#000000',
    },
    success: {
      main: '#66bb6a',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
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
