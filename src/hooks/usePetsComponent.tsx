import { IPet } from '@/interfaces/pet-interface';
import { usePaginationStore } from '@/stores/pagination-store';
import { usePetStore } from '@/stores/pets-store';
import { useState } from 'react';

export function usePetsComponent() {
   const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
   const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
   const [currentPet, setCurrentPet] = useState<IPet | null>(null);

   const { pets } = usePetStore();

   const { page, setPage, totalPages } = usePaginationStore();

   const handleBackPage = () => {
      if (page > 1) {
         setPage(page - 1);
      }
   };

   const handleNextPage = () => {
      if (page < totalPages) {
         setPage(page + 1);
      }
   };

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

   return {
      isOpenCreateModal,
      isOpenUpdateModal,
      isOpenDeleteModal,
      currentPet,
      pets,
      handleOpenCreateModal,
      handleOpenUpdateModal,
      handleOpenDeleteModal,
      handleCloseCreateModal,
      handleCloseUpdateModal,
      handleCloseDeleteModal,
      page,
      totalPages,
      handleBackPage,
      handleNextPage,
   };
}
