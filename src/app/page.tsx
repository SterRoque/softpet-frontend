'use client';

import { Button } from '@/components/button';
import { CurrentAdmin } from '@/components/current-admin';
import { Input } from '@/components/input';
import { InputSpecies, TSpecies } from '@/components/input-species';
import { Pagination } from '@/components/pagination';
import { PetAccordion } from '@/components/pet-accordion';
import { PetModal } from '@/components/pet-modal';
import { SearchBar } from '@/components/search-bar';
import { pets } from '@/constant/pet';
import { useState } from 'react';

export default function Home() {
   const [selectedSpecie, setSelectedSpecie] = useState<TSpecies>('DOG');

   return (
      <div className='h-screen bg-green-800'>
         <Input
            label='Email'
            placeholder='email'
            icon='collar'
         />
         <Input
            label='Senha'
            placeholder='senha'
         />
         <Input
            label='Data de Nascimento'
            type='date'
         />
         <Pagination
            page={1}
            totalPages={240}
         />
         <CurrentAdmin name='Ster' />
         <PetModal isOpen={true} />

         <SearchBar />
         <InputSpecies
            value={selectedSpecie}
            onChange={setSelectedSpecie}
         />

         {pets.map((pet) => (
            <PetAccordion
               pet={pet}
               key={pet.id}
            />
         ))}
      </div>
   );
}
