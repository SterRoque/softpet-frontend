import { getPetsAction } from '@/actions/pets-actions';
import { usePaginationStore } from '@/stores/pagination-store';
import { usePetStore } from '@/stores/pets-store';
import { HttpStatusCode } from 'axios';
import { useCallback, useEffect } from 'react';
import { useServerAction } from 'zsa-react';

type UseGetPetsProps = {
   notRenderGetPets?: boolean;
};

export function useGetPets({ notRenderGetPets = false }: UseGetPetsProps) {
   const { execute: executeGetPetsAction, isPending } =
      useServerAction(getPetsAction);

   const { setPets } = usePetStore();
   const { page, setTotalPages, search } = usePaginationStore();

   const getPets = useCallback(async () => {
      const [response] = await executeGetPetsAction({ page, search });

      if (response?.error) {
         console.log(response?.error);
      }

      if (response?.status === HttpStatusCode.Ok) {
         setPets(response?.data.pets);
         setTotalPages(response?.data.totalPages);
      }
   }, [page, search]);

   useEffect(() => {
      if (!notRenderGetPets) {
         getPets();
      }
   }, [page, notRenderGetPets]);

   return {
      isPendingGetPets: isPending,
      getPets,
   };
}
