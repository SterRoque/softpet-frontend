import { createPetAction } from '@/actions/pets-actions';
import { HttpStatusCode } from 'axios';
import { FormEvent, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useServerAction } from 'zsa-react';

export function useCreatePet() {
   const {
      execute: executeCreatePetAction,
      error: errorZod,
      data,
      isPending,
      setOptimistic,
   } = useServerAction(createPetAction);

   const createPet = useCallback(async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      const [response] = await executeCreatePetAction(formData);

      console.log(response?.data);

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
      }
   }, []);

   return {
      createPet,
      isPending,
      data,
   };
}
