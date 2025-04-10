import { IPet } from '@/interfaces/pet-interface';
import { usePetStore } from '@/stores/pets-store';
import { useEffect, useState } from 'react';

export function usePetsComponent(pets: IPet[]) {
   const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
   const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
   const [currentPet, setCurrentPet] = useState<IPet | null>(null);

   const { pets: petsState, setPets } = usePetStore();

   function handleOpenCreateModal() {
      setIsOpenCreateModal(true);
   }

   function handleOpenUpdateModal(pet: IPet) {
      setCurrentPet(pet);
      setIsOpenUpdateModal(true);
   }

   function handleOpenDeleteModal(pet: IPet) {
      setCurrentPet(pet);
      setIsOpenDeleteModal(true);
   }

   function handleCloseCreateModal() {
      setIsOpenCreateModal(false);
   }

   function handleCloseUpdateModal() {
      setCurrentPet(null);
      setIsOpenUpdateModal(false);
   }

   function handleCloseDeleteModal() {
      setCurrentPet(null);
      setIsOpenDeleteModal(false);
   }

   useEffect(() => {
      setPets(pets);
   }, [pets]);

   return {
      isOpenCreateModal,
      isOpenUpdateModal,
      isOpenDeleteModal,
      currentPet,
      petsState,
      handleOpenCreateModal,
      handleOpenUpdateModal,
      handleOpenDeleteModal,
      handleCloseCreateModal,
      handleCloseUpdateModal,
      handleCloseDeleteModal,
   };
}
