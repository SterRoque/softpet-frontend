'use client';

import { useState } from 'react';

type CurrentAdminProps = {
   name: string;
};

export function CurrentAdmin({ name }: CurrentAdminProps) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className='w-full max-w-40'>
         <div
            className='flex cursor-pointer items-center gap-2 text-white'
            onClick={() => setIsOpen(!isOpen)}>
            <img
               src='icons/user-second.svg'
               alt=''
               className='h-10 w-10'
            />
            <span>
               Olá, <b>{name}</b>
            </span>
            <img
               src='icons/dropdown.svg'
               alt=''
            />
         </div>

         {isOpen && (
            <div className='relative mt-1 h-10 cursor-pointer rounded-[10px] bg-linear-to-tl from-gray-950 to-[#001E4D] px-3 py-2 font-medium text-white'>
               Sair
               <img
                  src='icons/exit.svg'
                  alt=''
                  className='absolute top-2 right-2'
               />
            </div>
         )}
      </div>
   );
}
