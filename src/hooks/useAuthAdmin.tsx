import { authAdminAction } from '@/actions/admin-actions';
import { HttpStatusCode } from 'axios';
import { useRouter } from 'next/navigation';
import { FormEvent, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useServerAction } from 'zsa-react';

export function useAuthAdmin() {
   const { execute: executeAuthAdminAction, data: response } =
      useServerAction(authAdminAction);

   const router = useRouter();

   const authAdmin = useCallback(async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      const [res] = await executeAuthAdminAction(formData);

      if (res?.error) {
         if (res?.status === HttpStatusCode.Unauthorized) {
            toast.error('Email ou senha icorreto!');
            return;
         }
      }

      router.replace('/home');
   }, []);

   return {
      authAdmin,
   };
}
