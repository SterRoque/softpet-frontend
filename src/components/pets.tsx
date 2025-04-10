'use client';
import { Button } from './button';
import { Pagination } from './pagination';
import { PetAccordion } from './pet-accordion';
import { PetModal } from './pet-modal';
import { useEffect, useState } from 'react';
import { SearchBar } from './search-bar';
import { IPet } from '@/interfaces/pet-interface';
import { usePetStore } from '@/stores/pets-store';

interface IPetsProps {
   pets: IPet[];
}

export function Pets({ pets = [] }: IPetsProps) {
   const [isOpenPetModal, setIsOpenPetModal] = useState(false);
   const [currentPet, setCurrentPet] = useState<IPet | null>(null);
   const { pets: petsState, setPets } = usePetStore();

   useEffect(() => {
      setPets(pets);
   }, [pets]);

   return (
      <main className='relative min-h-full'>
         <div className='h-[calc(100svh-5rem)] w-full px-8 md:px-[55px]'>
            <div className='mb-9 flex flex-col items-center gap-[22px] pt-2 md:flex-row'>
               <SearchBar />
               <div className='w-full md:w-1/6'>
                  <Button
                     icon='add'
                     onClick={() => setIsOpenPetModal(true)}>
                     Cadastrar
                  </Button>
               </div>
            </div>

            <div className='flex flex-col gap-4 md:grid md:grid-cols-3 md:grid-rows-3 lg:grid lg:grid-cols-4 lg:grid-rows-4'>
               {petsState.map((pet) => (
                  <PetAccordion
                     pet={pet}
                     key={pet.id}
                     onEdit={() => setCurrentPet(pet)}
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
            isOpen={isOpenPetModal}
            onClose={() => setIsOpenPetModal(false)}
            variant='CREATE'
         />
         <PetModal
            isOpen={currentPet !== null}
            onClose={() => setCurrentPet(null)}
            variant='UPDATE'
            pet={currentPet}
         />
      </main>
   );
}
