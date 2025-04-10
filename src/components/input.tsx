'use client';
import { cn } from '@/utils/cn';
import { formatPhoneInput } from '@/utils/format-phone-input';
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
   label?: string;
   icon?: string;
   error?: string;
   initialValue?: string;
};

export function Input({
   label,
   icon,
   type,
   disabled,
   value,
   onChange,
   error,
   initialValue,
   ...rest
}: InputProps) {
   const inputRef = useRef<HTMLInputElement>(null);

   const [phone, setPhone] = useState('');

   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formattedPhone = formatPhoneInput(e.target.value);
      setPhone(formattedPhone);
   };

   useEffect(() => {
      if (initialValue && type === 'tel') {
         setPhone(initialValue);
      }
   }, [initialValue]);

   return (
      <div className='flex w-full flex-col'>
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
            value={type === 'tel' && initialValue ? phone : value}
            onChange={type === 'tel' ? handlePhoneChange : onChange}
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
