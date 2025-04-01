import { Input } from '@/components/Input';

export default function Home() {
   return (
      <div className='h-screen bg-black'>
         <Input
            label='Email'
            placeholder='email'
            icon='collar'
         />
         <Input
            label='Senha'
            placeholder='senha'
         />
         <Input
            label='Data de Nascimento'
            type='date'
         />
      </div>
   );
}
