'use client';

import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './button';
import { Input } from './input';
import { InputSpecies } from './input-species';
import { useState } from 'react';
import { useCreatePet } from '@/hooks/useCreatePet';

type PetModalProps = {
   isOpen: boolean;
   onClose?: () => void;
   variant?: 'CREATE' | 'UPDATE' | 'DELETE';
};

export function PetModal({
   isOpen,
   onClose,
   variant = 'CREATE',
}: PetModalProps) {
   const [tempSpecies, setTempSpecies] = useState<any>('DOG');

   const variants = {
      CREATE: {
         name: 'Cadastrar',
         icon: 'add',
      },
      UPDATE: {
         name: 'Editar',
         icon: 'edit',
      },
      DELETE: {
         name: 'Remover',
         icon: 'trash',
      },
   };

   const { createPet, isPending } = useCreatePet();

   return (
      <AnimatePresence>
         {isOpen && (
            <div
               className='fixed inset-0 z-50 flex items-center justify-center bg-[#00000080]'
               onClick={onClose}>
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className={cn(
                     'border-gradient mt-3.5 flex w-full max-w-[618px] flex-col justify-center gap-[18px] rounded-[10px] bg-linear-to-tl from-gray-950 to-[#001E4D] shadow-[0_0_30px_#0056E280]',
                  )}
                  onClick={(e) => e.stopPropagation()}>
                  <div className='p-[62px]'>
                     <div className='relative mb-10 flex items-center gap-6'>
                        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-700'>
                           <img
                              src={`icons/${variants[variant].icon}.svg`}
                              alt=''
                              className='h-8 w-8'
                           />
                        </div>
                        <h2 className='text-[30px] font-bold text-white'>
                           {variants[variant].name}
                        </h2>
                        <img
                           src='icons/close.svg'
                           alt=''
                           className='absolute top-3 right-0 cursor-pointer'
                           onClick={onClose}
                        />
                     </div>

                     <form
                        className='mb-10 flex flex-col gap-8'
                        onSubmit={createPet}>
                        <div className='flex flex-col gap-8 md:flex-row'>
                           <div className='flex flex-col gap-3.5'>
                              <Input
                                 name='pet_name'
                                 label='Nome'
                                 icon='collar'
                                 placeholder='Nome Sobrenome'
                                 disabled={variant === 'DELETE'}
                              />
                              <Input
                                 name='owner_name'
                                 label='Dono'
                                 icon='user'
                                 placeholder='Nome Sobrenome'
                                 disabled={variant === 'DELETE'}
                              />
                              <Input
                                 name='owner_phone'
                                 label='Telefone'
                                 icon='phone'
                                 placeholder='(00) 0 0000-0000'
                                 disabled={variant === 'DELETE'}
                              />
                           </div>
                           <div className='flex flex-col gap-3.5'>
                              <InputSpecies
                                 name='pet_species'
                                 value={tempSpecies}
                                 onChange={(v) => setTempSpecies(v)}
                                 icon='dna'
                                 label='Animal'
                              />
                              <Input
                                 name='pet_breed'
                                 label='Raça'
                                 icon='dna'
                                 placeholder='Raça'
                                 disabled={variant === 'DELETE'}
                              />
                              <Input
                                 name='pet_birth_date'
                                 label='Data de Nascimento'
                                 icon='calendar'
                                 type='date'
                                 disabled={variant === 'DELETE'}
                              />
                           </div>
                        </div>
                        {variant === 'DELETE' && (
                           <h1 className='text-center font-bold text-white'>
                              Tem certeza que deseja remover esse pet?
                           </h1>
                        )}
                        <div className='mt-10 flex gap-8'>
                           <Button
                              onClick={onClose}
                              icon='arrow-back'
                              variant='SECONDARY'>
                              Voltar
                           </Button>
                           <Button
                              isLoading={isPending}
                              type='submit'
                              icon={variants[variant].icon}
                              variant={
                                 variant === 'DELETE' ? 'TERTIARY' : 'PRIMARY'
                              }>
                              {variants[variant].name}
                           </Button>
                        </div>
                     </form>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
   );
}
