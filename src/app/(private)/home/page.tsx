import { Pets } from '@/components/pets';
import { getPetsService } from '@/services/pets-service';

export default async function Home() {
   const { data: petsResponse } = await getPetsService({});

   return (
      <div>
         <Pets pets={petsResponse.pets} />
      </div>
   );
}
