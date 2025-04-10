'use server';
import { createPetService } from '@/services/pets-service';
import { getCurrentAdminService } from '@/services/admins-service';
import { createPetSchema } from '@/validators/create-pet-validator';
import { createServerAction } from 'zsa';

export const createPetAction = createServerAction()
   .input(createPetSchema, {
      type: 'formData',
   })
   .handler(async ({ input }) => {
      try {
         const currentAdmin = await getCurrentAdminService();

         const response = await createPetService(currentAdmin!.id, input);

         console.log('oiiiii', response?.data);

         return {
            data: response?.data,
            status: response?.status,
         };
      } catch (error: any) {
         console.log('erro', error?.response?.data);
         return {
            error: error?.response?.data,
            status: error?.response?.status ?? 500,
         };
      }
   });
