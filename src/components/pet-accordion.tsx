'use client';
import { useState } from 'react';
import { Button } from './button';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { IPet } from '@/interfaces/pet-interface';

type PetAccordionProps = {
   pet: IPet;
};

export function PetAccordion({ pet }: PetAccordionProps) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div
         className='w-full max-w-[300px] text-white'
         onClick={() => setIsOpen(!isOpen)}>
         <div
            className={cn(
               'hover:border-gradient flex h-24 w-full cursor-pointer items-center justify-center gap-[18px] rounded-[10px] bg-linear-to-tl from-gray-950 to-[#001E4D]',
               isOpen && 'border-gradient',
            )}>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-700'>
               <img
                  src='icons/cat.svg'
                  alt=''
               />
            </div>
            <div>
               <div className='flex gap-2.5'>
                  <img
                     src='icons/collar.svg'
                     alt='collar'
                  />
                  <span>{pet.name}</span>
               </div>
               <div className='flex gap-2.5'>
                  <img
                     src='icons/user.svg'
                     alt=''
                  />
                  <span>{pet.owner.name}</span>
               </div>
            </div>
            <img
               src={`icons/${isOpen ? 'arrow-up' : 'arrow-down'}.svg`}
               alt=''
               className='w-5 cursor-pointer'
            />
         </div>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className={cn(
                     'mt-3.5 flex w-full flex-col justify-center gap-[18px] rounded-[10px] bg-linear-to-tl from-gray-950 to-[#001E4D] shadow-[0_0_30px_#0056E280]',
                     isOpen && 'border-gradient',
                  )}
                  onClick={(e) => e.stopPropagation()}>
                  <div className='mt-5 mr-[15px] ml-[23px] flex flex-col gap-2'>
                     <div className='flex gap-2.5'>
                        <img
                           src='icons/dna.svg'
                           alt=''
                        />
                        <span>Raça: {pet.breed}</span>
                     </div>
                     <div className='flex gap-1.5'>
                        <img
                           src='icons/phone.svg'
                           alt=''
                        />
                        <span>Telefone: {pet.owner.phone}</span>
                     </div>
                     <div className='flex gap-[8px]'>
                        <img
                           src='icons/calendar.svg'
                           alt=''
                        />
                        <span>Idade: 2 anos {pet.birthday_date}</span>
                     </div>
                  </div>

                  <div className='mb-[15px] flex w-full flex-col gap-3 px-[15px]'>
                     <Button
                        variant='SECONDARY'
                        icon='edit-second'>
                        Editar
                     </Button>
                     <Button icon='trash'>Remover</Button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
