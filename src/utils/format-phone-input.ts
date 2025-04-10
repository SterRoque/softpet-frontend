export const formatPhoneInput = (value: string): string => {
   const cleaned = value.replace(/\D/g, '');

   if (cleaned.length <= 2) {
      return cleaned;
   }

   if (cleaned.length <= 3) {
      return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2)}`;
   }

   if (cleaned.length <= 7) {
      return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 3)} ${cleaned.substring(3)}`;
   }

   return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 3)} ${cleaned.substring(3, 7)}-${cleaned.substring(7, 11)}`;
};
