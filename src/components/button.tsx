import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   icon?: string;
   variant?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
};

export function Button({ icon, variant = 'PRIMARY', ...rest }: ButtonProps) {
   const variants = {
      backgroundColor: {
         PRIMARY: 'bg-linear-to-r from-cyan-400 to-blue-700',
         SECONDARY: 'bg-white',
         TERTIARY: 'bg-rose-600',
      },
      textColor: {
         PRIMARY: 'text-white',
         SECONDARY:
            'bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent',
         TERTIARY: 'text-white',
      },
   };

   return (
      <button
         className={cn(
            'flex h-10 w-full max-w-[231px] cursor-pointer items-center justify-center gap-2 rounded-md font-bold',
            variants.backgroundColor[variant],
         )}
         {...rest}>
         <img
            src={`icons/${icon}.svg`}
            alt=''
            className={cn(icon && 'h-4 w-4')}
         />
         <span className={variants.textColor[variant]}>Cadastrar</span>
      </button>
   );
}
