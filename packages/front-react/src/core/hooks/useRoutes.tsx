import { useRouter } from "@tanstack/react-router";

export const useRoutes = () => {
  const router = useRouter();
  return router;
}
