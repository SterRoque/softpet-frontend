'use server';

import { createAdminService } from '@/services/admins-service';
import { createAdminSchema } from '@/validators/create-admin-validator';
import { redirect, RedirectType } from 'next/navigation';
import { createServerAction } from 'zsa';

export const createAdminAction = createServerAction()
   .input(createAdminSchema, {
      type: 'formData',
   })
   .handler(async ({ input }) => {
      try {
         const response = await createAdminService(input);

         return {
            status: response?.status,
         };
      } catch (error: any) {
         return {
            error: error?.response?.data,
            status: error?.response?.status ?? 500,
         };
      }
   });
