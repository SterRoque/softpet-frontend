'use server';

import {
   authAdminService,
   createAdminService,
} from '@/services/admins-service';
import { authAdminSchema } from '@/validators/auth-admin-validator';
import { createAdminSchema } from '@/validators/create-admin-validator';
import { cookies } from 'next/headers';
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

export const authAdminAction = createServerAction()
   .input(authAdminSchema, { type: 'formData' })
   .handler(async ({ input }) => {
      const cookieStore = await cookies();
      try {
         const response = await authAdminService(input);

         cookieStore.set('token', response?.data?.access_token);

         const token = cookieStore.get('token')?.value;
         console.log(token);

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

export async function signOutAction() {
   const cookiesStore = await cookies();

   cookiesStore.delete('token');

   redirect('/login', RedirectType.replace);
}
