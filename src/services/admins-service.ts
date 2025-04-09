import { IAdmin } from '@/interfaces/admin-interface';
import { api } from '@/lib/axios';
import { TAuthAdminSchema } from '@/validators/auth-admin-validator';
import { TCreateAdminSchema } from '@/validators/create-admin-validator';

export async function createAdminService(data: TCreateAdminSchema) {
   return api.post('/admins', data);
}

export async function getCurrentAdminService() {
   return api.get<IAdmin>('/admins');
}

export async function authAdminService(data: TAuthAdminSchema) {
   return api.post('/auth', data);
}
