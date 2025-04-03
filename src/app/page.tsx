'use client';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { InputSpecies, TSpecies } from '@/components/input-species';
import { PetAccordion } from '@/components/pet-accordion';
import { pets } from '@/constant/pet';
import { useState } from 'react';

export default function Home() {
   const [selectedSpecie, setSelectedSpecie] = useState<TSpecies>('DOG');

   return (
      <div className='h-screen bg-black'>
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
