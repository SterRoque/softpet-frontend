'use client';
import { Button } from './button';
import { Pagination } from './pagination';
import { PetAccordion } from './pet-accordion';
import { PetModal } from './pet-modal';
import { SearchBar } from './search-bar';
import { IPet } from '@/interfaces/pet-interface';
import { usePetsComponent } from '@/hooks/usePetsComponent';

interface IPetsProps {
   pets: IPet[];
}

export function Pets({ pets = [] }: IPetsProps) {
   const petsComponent = usePetsComponent(pets);

   return (
      <main className='relative min-h-full'>
         <div className='h-[calc(100svh-5rem)] w-full px-8 md:px-[55px]'>
            <div className='mb-9 flex flex-col items-center gap-[22px] pt-2 md:flex-row'>
               <SearchBar />
               <div className='w-full md:w-1/6'>
                  <Button
                     icon='add'
                     onClick={petsComponent.handleOpenCreateModal}>
                     Cadastrar
                  </Button>
               </div>
            </div>

            <div className='flex flex-col gap-4 md:grid md:grid-cols-3 md:grid-rows-3 lg:grid lg:grid-cols-4 lg:grid-rows-4'>
               {petsComponent.petsState.map((pet) => (
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
                  page={1}
                  totalPages={245}
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
