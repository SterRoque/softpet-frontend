import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { cn } from '@/utils/cn';

export default function RegisterPage() {
   return (
      <main className='flex h-screen items-center justify-center'>
         <form
            action=''
            className={cn(
               'border-gradient flex w-full max-w-[618px] flex-col justify-center gap-[18px] self-center rounded-[10px] bg-linear-to-tl from-gray-950 to-[#001E4D] shadow-[0_0_30px_#0056E280]',
            )}>
            <div className='px-16 pt-16 pb-[85px]'>
               <h1 className='mb-14 text-[30px] font-bold text-white'>
                  Cadastre-se
               </h1>

               <div className='flex gap-[30px]'>
                  <div className='flex flex-col gap-3.5'>
                     <Input
                        label='Nome'
                        placeholder='Nome'
                        required
                     />
                     <Input
                        label='Email'
                        placeholder='Email'
                        type='email'
                        required
                     />
                  </div>
                  <div className='flex flex-col gap-3.5'>
                     <Input
                        label='Sobrenome'
                        placeholder='Sobrenome'
                        required
                     />
                     <Input
                        label='Senha'
                        placeholder='Senha'
                        type='password'
                        required
                     />
                  </div>
               </div>

               <div className='mt-14'>
                  <Button>Cadastrar</Button>
               </div>
            </div>
         </form>
      </main>
   );
}
