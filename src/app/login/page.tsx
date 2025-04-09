'use client';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useAuthAdmin } from '@/hooks/useAuthAdmin';
import { cn } from '@/utils/cn';

export default function LoginPage() {
   const { authAdmin } = useAuthAdmin();
   return (
      <main className='flex h-screen items-center justify-center'>
         <form
            action=''
            onSubmit={authAdmin}
            className={cn(
               'border-gradient flex w-full max-w-[418px] flex-col justify-center gap-[18px] self-center rounded-[10px] bg-linear-to-tl from-gray-950 to-[#001E4D] shadow-[0_0_30px_#0056E280]',
            )}>
            <div className='flex flex-col items-center justify-center px-[94px] pt-[60px] pb-[85px]'>
               <img
                  src='logo/logo.svg'
                  alt=''
               />

               <div className='mt-14 flex gap-[30px]'>
                  <div className='flex flex-col gap-3.5'>
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
                        required
                     />
                  </div>
               </div>

               <div className='mt-14 w-full'>
                  <Button>Cadastrar</Button>
               </div>
            </div>
         </form>
      </main>
   );
}
