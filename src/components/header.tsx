import { CurrentAdmin } from './current-admin';

export function Header() {
   return (
      <header className='z-40 h-[80px] w-full px-8 md:px-[55px]'>
         <div className='flex h-full w-full items-center justify-between'>
            <img
               src='logo/logo.svg'
               alt='Logo'
               className='w-32'
            />

            <div className='relative h-full w-[200px]'>
               <div className='absolute top-5 right-0'>
                  <CurrentAdmin name='Ster' />
               </div>
            </div>
         </div>
      </header>
   );
}
