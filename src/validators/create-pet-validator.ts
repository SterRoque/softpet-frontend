import { z } from 'zod';

export const createPetSchema = z.object({
   pet_name: z.string().min(1),
   pet_species: z.string().min(1),
   pet_breed: z.string().min(1),
   pet_birthday_date: z.string(),
   owner_name: z.string().min(1),
   owner_phone: z.string().min(1),
});

export type TCreatePetSchema = z.infer<typeof createPetSchema>;
