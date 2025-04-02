import { cn } from '@/utils/cn';

export type TSpecies = 'DOG' | 'CAT';

type InputSpeciesProps = {
   value: TSpecies;
   onChange: (value: TSpecies) => void;
   icon?: string;
   label?: string;
};

export function InputSpecies({
   value = 'DOG',
   onChange,
   icon,
   label,
}: InputSpeciesProps) {
   return (
      <div>
         <div className={cn('mb-2 flex items-center gap-2')}>
            <img
               src={`icons/${icon}.svg`}
               alt={`imagem ${icon}`}
               className={cn(icon ? 'h-4 w-4' : 'hidden')}
            />
            <label className='text-base text-white'>{label}</label>
         </div>

         <div className='flex w-full max-w-[231px] gap-2'>
            <div
               className={cn(
                  'flex h-[39px] w-1/2 cursor-pointer items-center gap-2 rounded-[10px] border-[3px] border-gray-700 bg-transparent px-3 text-gray-700',
                  value === 'DOG' && 'border-white text-white',
               )}
               onClick={() => onChange('DOG')}>
               <img
                  src={`icons/${value === 'DOG' ? 'radio-selected' : 'radio-no-selected'}.svg`}
                  alt=''
                  className='h-3 w-3'
               />
               <span>Cachorro</span>
            </div>
            <div
               className={cn(
                  'text-gray-700focus-visible:border-white flex h-[39px] w-1/2 cursor-pointer items-center gap-2 rounded-[10px] border-[3px] border-gray-700 bg-transparent px-3 text-gray-700',
                  value === 'CAT' && 'border-white text-white',
               )}
               onClick={() => onChange('CAT')}>
               <img
                  src={`icons/${value === 'CAT' ? 'radio-selected' : 'radio-no-selected'}.svg`}
                  alt=''
                  className='h-3 w-3'
               />
               <span>Gato</span>
            </div>
         </div>
      </div>
   );
}
