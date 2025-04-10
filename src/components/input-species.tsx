import { cn } from '@/utils/cn';
import { useState } from 'react';

export type TSpecies = 'DOG' | 'CAT';

type InputSpeciesProps = {
   icon?: string;
   label?: string;
   name?: string;
   defaultValue?: TSpecies;
};

export function InputSpecies({
   icon,
   label,
   name,
   defaultValue,
}: InputSpeciesProps) {
   const [selected, setSelected] = useState<TSpecies>(defaultValue || 'DOG');
   return (
      <div>
         <div className={cn('mb-2 flex items-center gap-2')}>
            {icon && (
               <img
                  src={`icons/${icon}.svg`}
                  alt={`imagem ${icon}`}
                  className={cn(icon ? 'h-4 w-4' : 'hidden')}
               />
            )}
            <label className='text-base text-white'>{label}</label>
         </div>

         <div className='flex w-full max-w-[231px] gap-2'>
            <div
               className={cn(
                  'flex h-[39px] w-1/2 cursor-pointer items-center gap-2 rounded-[10px] border-[3px] border-gray-700 bg-transparent px-3 text-gray-700',
                  selected === 'DOG' && 'border-white text-white',
               )}
               onClick={() => setSelected('DOG')}>
               <img
                  src={`icons/${selected === 'DOG' ? 'radio-selected' : 'radio-no-selected'}.svg`}
                  alt=''
                  className='h-3 w-3'
               />
               <span>Cachorro</span>
            </div>
            <div
               className={cn(
                  'text-gray-700focus-visible:border-white flex h-[39px] w-1/2 cursor-pointer items-center gap-2 rounded-[10px] border-[3px] border-gray-700 bg-transparent px-3 text-gray-700',
                  selected === 'CAT' && 'border-white text-white',
               )}
               onClick={() => setSelected('CAT')}>
               <img
                  src={`icons/${selected === 'CAT' ? 'radio-selected' : 'radio-no-selected'}.svg`}
                  alt=''
                  className='h-3 w-3'
               />
               <span>Gato</span>
            </div>
            <input
               type='hidden'
               name={name}
               value={selected}
            />
         </div>
      </div>
   );
}
