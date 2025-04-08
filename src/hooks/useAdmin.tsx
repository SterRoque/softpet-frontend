import { createAdminAction } from '@/actions/admin-actions';
import { createAdminService } from '@/services/admins-service';
import { FormEvent, useTransition } from 'react';

export function useAdmin() {
   const [isPending, startTransition] = useTransition();

   async function createAdmin(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      startTransition(async () => {
         const formData = new FormData(event.currentTarget);

         const response = await createAdminAction(formData);

         console.log({
            response,
         });
      });
   }

   return {
      createAdmin,
      isPending,
   };
}
