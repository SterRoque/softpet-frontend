'use client';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useAuthAdmin } from '@/hooks/useAuthAdmin';
import { cn } from '@/utils/cn';
import Link from 'next/link';

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
            <div className='flex flex-col items-center justify-center px-[80px] pt-[60px] pb-[85px] md:px-[94px]'>
               <img
                  src='logo/logo.svg'
                  alt=''
               />

               <div className='mt-14 flex flex-col'>
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
                        type='password'
                        required
                     />
                  </div>
               </div>

               <div className='mt-10 w-full'>
                  <Button>Entrar</Button>
                  <p className='mt-6 text-xs text-white'>
                     Ainda não tem uma conta?{' '}
                     <Link
                        href={'/register'}
                        className='font-semibold text-cyan-400'>
                        Cadastre-se
                     </Link>
                  </p>
               </div>
            </div>
         </form>
      </main>
   );
}
