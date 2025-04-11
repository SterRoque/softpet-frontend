import { InputHTMLAttributes } from 'react';

type SearchBarProps = InputHTMLAttributes<HTMLInputElement> & {
   onSearch: () => void;
};

export function SearchBar({ onSearch, ...rest }: SearchBarProps) {
   return (
      <div className='flex h-[50px] w-full'>
         <div className='flex h-full w-11 items-center justify-center rounded-l-[10px] bg-[#404A5C]'>
            <img
               src='icons/search.svg'
               alt=''
            />
         </div>
         <div className='relative w-full'>
            <input
               type='text'
               className='h-[50px] w-full rounded-[10px] rounded-l-none border-[3px] border-[#404A5C] bg-transparent px-2 py-[2px] text-white focus:outline-none'
               {...rest}
            />
            <button
               className='absolute top-[7px] right-[7px] h-9 w-[106px] cursor-pointer rounded-md bg-[#404A5C] text-white'
               onClick={onSearch}>
               Pesquisar
            </button>
         </div>
      </div>
   );
}
