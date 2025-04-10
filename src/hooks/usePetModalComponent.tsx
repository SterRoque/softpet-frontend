import { useEffect } from 'react';
import { useCreatePet } from './useCreatePet';
import { useDeletePet } from './useDeletePet';
import { useUpdatePet } from './useUpdatePet';
import { HttpStatusCode } from 'axios';
import { IPet } from '@/interfaces/pet-interface';

export type TVariant = 'CREATE' | 'UPDATE' | 'DELETE';

type PetModalComponentProps = {
   pet?: IPet | null;
   variant: TVariant;
   onClose?: () => void;
};

export function usePetModalComponent({
   pet,
   variant,
   onClose,
}: PetModalComponentProps) {
   const { createPet, isPendingCreatePet, dataCreatePet } = useCreatePet();
   const { updatePet, isPendingUpdatePet, dataUpdatePet } = useUpdatePet(
      pet?.id,
   );
   const { deletePet, isPendingDeletePet, dataDeletePet } = useDeletePet();

   const variants = {
      CREATE: {
         name: 'Cadastrar',
         icon: 'add',
         onSubmit: createPet,
      },
      UPDATE: {
         name: 'Editar',
         icon: 'edit',
         onSubmit: updatePet,
      },
      DELETE: {
         name: 'Remover',
         icon: 'trash',
         onSubmit: deletePet,
      },
   };

   useEffect(() => {
      if (
         dataCreatePet?.status === HttpStatusCode.Created ||
         dataUpdatePet?.status === HttpStatusCode.Ok ||
         dataDeletePet?.status === HttpStatusCode.Ok
      ) {
         onClose?.();
      }
   }, [dataCreatePet?.status, dataUpdatePet?.status, dataDeletePet?.status]);

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (variant === 'DELETE') {
         variants[variant].onSubmit(pet!.id);
         return;
      }

      variants[variant].onSubmit(e);
   };

   return {
      handleSubmit,
      isPendingCreatePet,
      isPendingUpdatePet,
      isPendingDeletePet,
      variants,
   };
}
