'use client';

import { Input } from '@/components/input';
import { InputSpecies, TSpecies } from '@/components/input-species';
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
      </div>
   );
}
