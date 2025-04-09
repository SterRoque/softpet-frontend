import { createAdminAction } from '@/actions/admin-actions';
import { HttpStatusCode } from 'axios';
import { useRouter } from 'next/navigation';
import { FormEvent, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useServerAction } from 'zsa-react';

export function useCreateAdmin() {
   const {
      execute: executeCreateAdminAction,
      data: response,
      error: errorZod,
      isPending,
      reset,
   } = useServerAction(createAdminAction);

   const router = useRouter();

   const createAdmin = useCallback(
      async (event: FormEvent<HTMLFormElement>) => {
         event.preventDefault();

         reset();

         const formData = new FormData(event.currentTarget);

         const [res] = await executeCreateAdminAction(formData);

         if (res?.error) {
            if (res?.status === HttpStatusCode.Conflict) {
               toast.error('Administrador já cadastrado!');
               return;
            }

            toast.error('Houve um erro ao cadastrar administrador.');

            return;
         }

         if (res?.status === HttpStatusCode.Created) {
            toast.success('Administrador cadastrado com sucesso!');
            router.replace('/login');
         }
      },
      [response],
   );

   return {
      createAdmin,
      isPending,
      errorZod: errorZod?.fieldErrors,
      reset,
   };
}
