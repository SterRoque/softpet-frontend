import { z } from 'zod';

export const authAdminSchema = z.object({
   email: z.string().email(),
   password: z.string(),
});

export type TAuthAdminSchema = z.infer<typeof authAdminSchema>;
