'use client';
import { cn } from '@/utils/cn';
import { InputHTMLAttributes, useRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
   label?: string;
   icon?: string;
   error?: string;
};

export function Input({
   label,
   icon,
   type,
   disabled,
   error,
   ...rest
}: InputProps) {
   const inputRef = useRef<HTMLInputElement>(null);

   return (
      <div className='flex w-full max-w-[231px] flex-col'>
         <div className={cn('mb-2 flex items-center gap-2')}>
            {icon && (
               <img
                  src={`icons/${icon}.svg`}
                  alt={`imagem ${icon}`}
                  className={cn(icon ? 'h-4 w-4' : 'hidden')}
               />
            )}
            <label className='text-base text-white'>{label}</label>
         </div>
         <input
            ref={inputRef}
            type={type}
            disabled={disabled}
            onClick={() => type === 'date' && inputRef.current?.showPicker()}
            className={cn(
               'h-[39px] w-full rounded-[10px] border-[3px] border-gray-700 bg-transparent px-3 text-white placeholder:text-gray-700 focus:outline-none focus-visible:border-white',
               disabled && 'bg-gray-700',
               type === 'date' && 'custom-date-input cursor-pointer',
            )}
            {...rest}
         />
         {error && (
            <span className='mt-2 ml-[1px] text-xs text-red-500'>{error}</span>
         )}
      </div>
   );
}
