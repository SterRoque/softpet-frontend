export const formatPhoneNumber = (phoneNumber: string): string => {
   const cleaned = phoneNumber.replace(/\D/g, '');

   if (cleaned.length !== 11) {
      return phoneNumber;
   }

   return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 3)} ${cleaned.substring(3, 7)}-${cleaned.substring(7)}`;
};
