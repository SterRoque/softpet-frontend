import { Dispatch, SetStateAction } from 'react';

type PaginationProps = {
   page?: number;
   setPage?: Dispatch<SetStateAction<number>>;
   totalPages?: number;
};

export function Pagination({ page, setPage, totalPages }: PaginationProps) {
   return (
      <div className='flex gap-2'>
         <img
            src='icons/arrow-left.svg'
            alt=''
            className='cursor-pointer'
         />
         <span className='font-bold text-white'>
            {page} de {totalPages}
         </span>
         <img
            src='icons/arrow-right.svg'
            alt=''
            className='cursor-pointer'
         />
      </div>
   );
}
