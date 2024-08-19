import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2 text-red-400">
        <Link to="/" className="hover:text-cyan-600">
          Home
        </Link>{' '}
        <Link to="/about" className="hover:text-cyan-600">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
