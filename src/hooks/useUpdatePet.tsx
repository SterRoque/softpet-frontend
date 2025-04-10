import { updatePetAction } from '@/actions/pets-actions';
import { usePetStore } from '@/stores/pets-store';
import { HttpStatusCode } from 'axios';
import { FormEvent, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useServerAction } from 'zsa-react';

export function useUpdatePet(petId?: string) {
   const {
      execute: executeUpdatePetAction,
      isPending,
      data,
   } = useServerAction(updatePetAction);

   const { pets, setPets } = usePetStore();

   const updatePet = useCallback(
      async (event: FormEvent<HTMLFormElement>) => {
         event.preventDefault();

         if (!petId) return;

         const formData = new FormData(event.currentTarget);

         formData.set('id', petId);

         console.log('formData', formData.get('owner_phone'));

         const [response] = await executeUpdatePetAction(formData);

         if (response?.status === HttpStatusCode.Ok) {
            toast.success('Pet atualizado com sucesso!');

            const updatedPetIndex = pets.findIndex((pet) => pet.id === petId);

            if (updatedPetIndex >= 0) {
               const updatedPets = pets;
               pets[updatedPetIndex] = response?.data;

               setPets(updatedPets);
            }
         }
      },
      [petId, pets, setPets],
   );

   return {
      updatePet,
      isPendingUpdatePet: isPending,
      dataUpdatePet: data,
   };
}
