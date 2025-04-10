import { z } from 'zod';

export const updatePetSchema = z.object({
   id: z.string().min(1),
   pet_name: z.string().min(1),
   pet_species: z.string().min(1),
   pet_breed: z.string().min(1),
   pet_birthday_date: z.string(),
   owner_name: z.string().min(1),
   owner_phone: z.string().min(1),
});

export type TUpdatePetSchema = z.infer<typeof updatePetSchema>;
