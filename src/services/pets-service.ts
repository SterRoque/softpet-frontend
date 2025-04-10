import { api } from '@/lib/axios';
import { TCreatePetSchema } from '@/validators/create-pet-validator';
import { TUpdatePetSchema } from '@/validators/update-pet-validator';

interface IGetPetsServiceRequest {
   page?: number;
   limit?: number;
   search?: string;
}

export async function getPetsService({
   page = 1,
   limit = 16,
   search = '',
}: IGetPetsServiceRequest) {
   return api.get(`/pets?page=${page}&limit=${limit}&search=${search}`);
}

export async function createPetService(data: TCreatePetSchema) {
   return await api.post('/pets', data);
}

export async function updatePetService(data: TUpdatePetSchema) {
   return await api.patch(`/pets/${data.id}`, {
      ...data,
      id: undefined,
   });
}
