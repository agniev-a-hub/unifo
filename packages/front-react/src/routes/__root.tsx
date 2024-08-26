import { AppBar } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <AppBar>123</AppBar>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});
