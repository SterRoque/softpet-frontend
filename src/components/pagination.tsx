import { Dispatch, SetStateAction } from 'react';

type PaginationProps = {
   page: number;
   handleBackPage: () => void;
   handleNextPage: () => void;
   totalPages?: number;
};

export function Pagination({
   page,
   handleBackPage,
   handleNextPage,
   totalPages,
}: PaginationProps) {
   return (
      <div className='flex gap-2'>
         <img
            src='icons/arrow-left.svg'
            alt=''
            className='cursor-pointer'
            onClick={handleBackPage}
         />
         <span className='font-bold text-white'>
            {page} de {totalPages}
         </span>
         <img
            src='icons/arrow-right.svg'
            alt=''
            className='cursor-pointer'
            onClick={handleNextPage}
         />
      </div>
   );
}
