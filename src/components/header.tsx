'use server';
import { getCurrentAdminService } from '@/services/admins-service';
import { CurrentAdmin } from './current-admin';

export async function Header() {
   const { data: currentAdmin } = await getCurrentAdminService();
   return (
      <header className='z-50 h-[80px] w-full px-8 md:px-[55px]'>
         <div className='flex h-full w-full items-center justify-between'>
            <img
               src='logo/logo.svg'
               alt='Logo'
               className='w-32'
            />

            <div className='relative z-50 h-full w-[200px]'>
               <div className='absolute top-5 right-0'>
                  <CurrentAdmin name={currentAdmin.first_name} />
               </div>
            </div>
         </div>
      </header>
   );
}
