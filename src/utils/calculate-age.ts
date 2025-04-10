export const calculateAge = (birthDate: Date | string): string => {
   const today = new Date();
   let years = today.getFullYear() - new Date(birthDate).getFullYear();
   let months = today.getMonth() - new Date(birthDate).getMonth();

   if (months < 0) {
      years--;
      months += 12;
   }

   if (today.getDate() < new Date(birthDate).getDate()) {
      months--;
      if (months < 0) {
         years--;
         months += 12;
      }
   }

   if (years > 0) {
      return `${years} ano${years > 1 ? 's' : ''}`;
   }

   return `${months} mes${months !== 1 ? 'es' : ''}`;
};
