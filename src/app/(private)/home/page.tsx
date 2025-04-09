'use client';

import { Button } from '@/components/button';
import { Pagination } from '@/components/pagination';
import { PetAccordion } from '@/components/pet-accordion';
import { PetModal } from '@/components/pet-modal';
import { SearchBar } from '@/components/search-bar';
import { pets } from '@/constant/pet';
import { useState } from 'react';

export default function Home() {
   const [isOpenPetModal, setIsOpenPetModal] = useState(false);

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
               {pets.map((pet) => (
                  <PetAccordion
                     pet={pet}
                     key={pet.id}
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
         />
      </main>
   );
}
