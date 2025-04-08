'use server';

import { createAdminService } from '@/services/admins-service';
import {
   createAdminSchema,
   TCreateAdminSchema,
} from '@/validators/create-admin-validator';

export async function createAdminAction(formData: FormData) {
   const rawFormData = {
      first_name: formData.get('first_name')?.toString(),
      last_name: formData.get('last_name')?.toString(),
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
   };

   const validatedData = createAdminSchema.parse(rawFormData);

   const response = await createAdminService(validatedData);

   console.log({
      STATUS: response.status,
   });

   if (response?.status >= 400) {
      return {
         error: true,
         data: response?.data,
         status: response.status,
      };
   }

   return {
      error: false,
      data: response?.data,
      status: response.status,
   };
}

// export async function createAdminAction(
//    formData: FormData,
// ): Promise<IActionResponse<IAdmin | IResponseError>> {
//    const rawFormData = {
//       first_name: formData.get('first_name'),
//       last_name: formData.get('last_name'),
//       email: formData.get('email'),
//       password: formData.get('password'),
//    } as TCreateAdminSchema;

//    const data = createAdminSchema.parse(rawFormData);

//    try {
//       const response = await createAdminService(data);

//       return {
//          data: response.data,
//          error: false,
//       };
//    } catch (error) {
//       const { response } = error as IError;

//       return {
//          data: response.data,
//          error: true,
//       };
//    }
// }
