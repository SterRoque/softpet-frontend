import { IPet } from '@/interfaces/pet-interface';
import { create } from 'zustand';

type TPaginationStore = {
   page: number;
   setPage: (totalPages: number) => void;
   totalPages: number;
   setTotalPages: (totalPages: number) => void;
   search: string;
   setSearch: (search: string) => void;
};

export const usePaginationStore = create<TPaginationStore>()((set) => ({
   page: 1,
   setPage: (newPage) => set({ page: newPage }),
   totalPages: 0,
   setTotalPages: (newTotalPages) => set({ totalPages: newTotalPages }),
   search: '',
   setSearch: (text) => set({ search: text }),
}));
