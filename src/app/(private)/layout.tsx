'use server';

import { Header } from '@/components/header';
import { getCurrentAdminService } from '@/services/admins-service';
import { redirect } from 'next/navigation';

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const currentAdmin = await getCurrentAdminService();

   if (!currentAdmin) {
      return redirect('/');
   }

   return (
      <>
         <Header />
         {children}
      </>
   );
}
