import { useCallback } from 'react';
import { usePetStore } from '@/stores/pets-store';
import { toast } from 'react-toastify';
import { HttpStatusCode } from 'axios';
import { useServerAction } from 'zsa-react';
import { deletePetAction } from '@/actions/pets-actions';

export function useDeletePet() {
   const { pets, setPets } = usePetStore();
   const {
      execute: executeDeletePetAction,
      isPending,
      data,
   } = useServerAction(deletePetAction);

   const deletePet = useCallback(
      async (id: string) => {
         const [response] = await executeDeletePetAction({ id });

         if (response?.status === HttpStatusCode.Ok) {
            toast.success('Pet excluído com sucesso!');

            setPets(pets.filter((pet) => pet.id !== id));
         }
      },
      [pets, setPets],
   );

   return {
      deletePet,
      dataDeletePet: data,
      isPendingDeletePet: isPending,
   };
}
