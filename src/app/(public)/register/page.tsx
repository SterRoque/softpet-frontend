'use client';

import { createAdminAction } from '@/actions/admin-actions';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useCreateAdmin } from '@/hooks/useCreateAdmin';
import { cn } from '@/utils/cn';

export default function RegisterPage() {
   const { createAdmin, isPending, errorZod } = useCreateAdmin();

   return (
      <main className='flex h-screen items-center justify-center'>
         <form
            className={cn(
               'border-gradient flex w-full max-w-[618px] flex-col justify-center gap-[18px] self-center rounded-[10px] bg-linear-to-tl from-gray-950 to-[#001E4D] shadow-[0_0_30px_#0056E280]',
            )}
            onSubmit={createAdmin}>
            <div className='px-[94px] pt-16 pb-[85px] md:px-16'>
               <h1 className='mb-14 text-center text-[30px] font-bold text-white md:text-left'>
                  Cadastre-se
               </h1>

               <div className='flex flex-col gap-3.5'>
                  <div className='flex flex-col gap-[30px] md:flex-row'>
                     <Input
                        name='first_name'
                        label='Nome'
                        placeholder='Nome'
                        required
                     />
                     <Input
                        name='last_name'
                        label='Sobrenome'
                        placeholder='Sobrenome'
                        required
                     />
                  </div>
                  <div className='flex flex-col gap-[30px] md:flex-row'>
                     <Input
                        name='email'
                        label='Email'
                        placeholder='Email'
                        type='email'
                        required
                     />
                     <Input
                        name='password'
                        label='Senha'
                        placeholder='Senha'
                        type='password'
                        required
                        error={errorZod?.password![0]}
                     />
                  </div>
               </div>

               <div className='mt-14'>
                  <Button
                     type='submit'
                     isLoading={isPending}>
                     Cadastrar
                  </Button>
               </div>
            </div>
         </form>
      </main>
   );
}
