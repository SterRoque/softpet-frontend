'use server';

import {
   authAdminService,
   createAdminService,
} from '@/services/admins-service';
import { authAdminSchema } from '@/validators/auth-admin-validator';
import { createAdminSchema } from '@/validators/create-admin-validator';
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

export const authAdminAction = createServerAction()
   .input(authAdminSchema, { type: 'formData' })
   .handler(async ({ input }) => {
      try {
         const response = await authAdminService(input);

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
