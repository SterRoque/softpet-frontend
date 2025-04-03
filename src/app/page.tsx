import { Button } from '@/components/button';
import { Header } from '@/components/header';
import { Pagination } from '@/components/pagination';
import { PetAccordion } from '@/components/pet-accordion';
import { SearchBar } from '@/components/search-bar';
import { pets } from '@/constant/pet';

export default function Home() {
   return (
      <main>
         <Header />
         <div className='mt-3 h-full w-full px-8 md:px-[55px]'>
            <div className='mb-9 flex flex-col items-center gap-[22px] md:flex-row'>
               <SearchBar />
               <div className='w-full md:w-1/6'>
                  <Button icon='add'>Cadastrar</Button>
               </div>
            </div>

            <div className='flex flex-col gap-4 md:grid md:grid-cols-3 md:grid-rows-3 lg:grid lg:grid-cols-4 lg:grid-rows-4'>
               {pets.map((pet) => (
                  <PetAccordion
                     pet={pet}
                     key={pet.id}
                  />
               ))}
            </div>

            <div className='mt-7 hidden h-full w-full justify-end md:flex'>
               <Pagination
                  page={1}
                  totalPages={245}
               />
            </div>
         </div>
      </main>
   );
}
