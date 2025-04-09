import { z } from 'zod';

export const createAdminSchema = z.object({
   first_name: z.string(),
   last_name: z.string(),
   email: z.string().email(),
   password: z
      .string()
      .min(8, {
         message: 'A senha deve conter pelo menos 8 caracteres',
      })
      .refine(
         (value) => /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(value),
         {
            message:
               'A senha deve conter pelo menos uma letra, um número e um caractere especial.',
         },
      ),
});

export type TCreateAdminSchema = z.infer<typeof createAdminSchema>;
