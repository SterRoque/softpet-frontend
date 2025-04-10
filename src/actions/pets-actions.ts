'use server';
import { createPetService, updatePetService } from '@/services/pets-service';
import { getCurrentAdminService } from '@/services/admins-service';
import { createPetSchema } from '@/validators/create-pet-validator';
import { createServerAction } from 'zsa';
import { updatePetSchema } from '@/validators/update-pet-validator';

export const createPetAction = createServerAction()
   .input(createPetSchema, {
      type: 'formData',
   })
   .handler(async ({ input }) => {
      try {
         const response = await createPetService(input);

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

export const updatePetAction = createServerAction()
   .input(updatePetSchema, {
      type: 'formData',
   })
   .handler(async ({ input }) => {
      try {
         const response = await updatePetService(input);

         return {
            data: response?.data,
            status: response?.status,
         };
      } catch (error: any) {
         return {
            error: error?.response?.data,
            status: error?.response?.status ?? 500,
         };
      }
   });
