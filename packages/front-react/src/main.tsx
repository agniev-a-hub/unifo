import { NoSsr } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import i18n from './config/i18n';
import { ThemeProvider } from './core/ThemeProvider';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <NoSsr>
            <I18nextProvider i18n={i18n}>
              <RouterProvider router={router} />
            </I18nextProvider>
          </NoSsr>
        </ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>,
  );
}
