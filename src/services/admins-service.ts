import { api } from '@/lib/axios';
import { TCreateAdminSchema } from '@/validators/create-admin-validator';

export async function createAdminService(data: TCreateAdminSchema) {
   return api.post('/admins', data);
}
