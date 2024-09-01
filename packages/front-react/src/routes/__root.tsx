import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { LandingLayout } from '../layouts/LandingLayout';
import { Container } from '@mui/material';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <LandingLayout>
          <Container maxWidth="xl">
            <Outlet />
          </Container>
          <TanStackRouterDevtools />
        </LandingLayout>
      </>
    );
  },
});
