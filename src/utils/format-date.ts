export const formatDate = (date: Date | string): string => {
   const d = new Date(date);
   const day = d.getUTCDate().toString().padStart(2, '0');
   const month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
   const year = d.getUTCFullYear();

   return `(${day}/${month}/${year})`;
};
