import { useCallback } from 'react';
import { usePetStore } from '@/stores/pets-store';
import { toast } from 'react-toastify';
import { HttpStatusCode } from 'axios';
import { useServerAction } from 'zsa-react';
import { deletePetAction } from '@/actions/pets-actions';
import { useGetPets } from './useGetPets';
import { usePaginationStore } from '@/stores/pagination-store';

export function useDeletePet() {
   const {
      execute: executeDeletePetAction,
      isPending,
      data,
   } = useServerAction(deletePetAction);

   const { pets, setPets } = usePetStore();
   const { getPets } = useGetPets({
      notRenderGetPets: true,
   });
   const { page } = usePaginationStore();

   const deletePet = useCallback(
      async (id: string) => {
         const [response] = await executeDeletePetAction({ id });

         if (response?.status === HttpStatusCode.Ok) {
            toast.success('Pet excluído com sucesso!');

            if (page === 1 && pets.length < 16) {
               setPets(pets.filter((pet) => pet.id !== id));
               return;
            }

            await getPets();
         }
      },
      [pets, setPets, page],
   );

   return {
      deletePet,
      dataDeletePet: data,
      isPendingDeletePet: isPending,
   };
}
