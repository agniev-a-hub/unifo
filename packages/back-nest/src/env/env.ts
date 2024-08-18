import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.coerce.string(),
  BACK_NEST_APP_PORT: z.coerce.number(),
  BACK_NEST_CONTAINER_PORT: z.coerce.number(),
});

export type Env = z.infer<typeof envSchema>;
