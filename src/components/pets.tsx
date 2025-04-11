'use client';
import { useGetPets } from '@/hooks/useGetPets';
import { Button } from './button';
import { Pagination } from './pagination';
import { PetAccordion } from './pet-accordion';
import { PetModal } from './pet-modal';
import { SearchBar } from './search-bar';
import { usePetsComponent } from '@/hooks/usePetsComponent';

export function Pets() {
   const petsComponent = usePetsComponent();

   const { isPendingGetPets } = useGetPets({});

   return (
      <main className='relative min-h-full'>
         <div className='h-[calc(100svh-5rem)] w-full px-8 md:px-[55px]'>
            <div className='mb-9 flex flex-col items-center gap-[22px] pt-2 md:flex-row'>
               <SearchBar
                  value={petsComponent.search}
                  onChange={petsComponent.handleChange}
                  onSearch={petsComponent.handleSearch}
               />
               <div className='w-full md:w-1/6'>
                  <Button
                     icon='add'
                     onClick={petsComponent.handleOpenCreateModal}>
                     Cadastrar
                  </Button>
               </div>
            </div>

            <div className='flex flex-col gap-4 md:grid md:grid-cols-3 md:grid-rows-3 lg:grid lg:grid-cols-4 lg:grid-rows-4'>
               {petsComponent.pets.map((pet) => (
                  <PetAccordion
                     pet={pet}
                     key={pet.id}
                     onEdit={() => petsComponent.handleOpenUpdateModal(pet)}
                     onDelete={() => petsComponent.handleOpenDeleteModal(pet)}
                  />
               ))}
            </div>

            <div className='absolute right-[55px] bottom-4 hidden md:block'>
               <Pagination
                  page={petsComponent.page}
                  handleBackPage={petsComponent.handleBackPage}
                  handleNextPage={petsComponent.handleNextPage}
                  totalPages={petsComponent.totalPages}
               />
            </div>
         </div>

         <PetModal
            isOpen={petsComponent.isOpenCreateModal}
            onClose={petsComponent.handleCloseCreateModal}
            variant='CREATE'
         />
         <PetModal
            isOpen={petsComponent.isOpenUpdateModal}
            onClose={petsComponent.handleCloseUpdateModal}
            variant='UPDATE'
            pet={petsComponent.currentPet}
         />
         <PetModal
            isOpen={petsComponent.isOpenDeleteModal}
            onClose={petsComponent.handleCloseDeleteModal}
            variant='DELETE'
            pet={petsComponent.currentPet}
         />
      </main>
   );
}
