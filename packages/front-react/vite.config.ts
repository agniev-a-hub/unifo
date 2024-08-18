import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig(({ mode }) => {
  /* ENV management */
  const env = loadEnv(mode, process.cwd(), '');
  const {
    NODE_ENV,
    FRONT_REACT_APP_PORT,
    FRONT_REACT_CONTAINER_PORT,
  } = env;
  const loadedEnv = {
    NODE_ENV,
    FRONT_REACT_APP_PORT,
    FRONT_REACT_CONTAINER_PORT,
  };

  return {
    plugins: [
      react(),
      EnvironmentPlugin(loadedEnv),
      TanStackRouterVite(),
    ],
    server: {
      port: Number(FRONT_REACT_APP_PORT),
      host: true,
    },
  };
});
