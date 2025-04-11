import { createPetAction } from '@/actions/pets-actions';
import { usePaginationStore } from '@/stores/pagination-store';
import { usePetStore } from '@/stores/pets-store';
import { HttpStatusCode } from 'axios';
import { FormEvent, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useServerAction } from 'zsa-react';

export function useCreatePet() {
   const {
      execute: executeCreatePetAction,
      data,
      isPending,
   } = useServerAction(createPetAction);

   const { pets, setPets } = usePetStore();
   const { totalPages, setTotalPages } = usePaginationStore();

   const createPet = useCallback(
      async (event: FormEvent<HTMLFormElement>) => {
         event.preventDefault();

         const formData = new FormData(event.currentTarget);

         const [response] = await executeCreatePetAction(formData);

         if (response?.error) {
            if (response?.error.message === 'Phone already exists!') {
               toast.error('Telefone já cadastrado!');
               return;
            }

            if (response?.error.message === 'Pet already exists!') {
               toast.error('Pet já cadastrado!');
               return;
            }

            toast.error('Houve um erro ao cadastrar o pet!');
         }

         if (response?.status === HttpStatusCode.Created) {
            toast.success('Pet cadastrado com sucesso!');
            const updatedPets = [response?.data, ...pets];

            if (updatedPets.length >= 16) {
               updatedPets.pop();
               setTotalPages(totalPages + 1);
            }

            setPets(updatedPets);
         }
      },
      [pets, setPets],
   );

   console.log({
      pets: pets[0],
   });

   return {
      createPet,
      isPendingCreatePet: isPending,
      dataCreatePet: data,
   };
}
