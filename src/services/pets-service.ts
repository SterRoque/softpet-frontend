import { api } from '@/lib/axios';

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
