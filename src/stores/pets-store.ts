import { IPet } from '@/interfaces/pet-interface';
import { create } from 'zustand';

type TPetStore = {
   pets: IPet[];
   setPets: (pets: IPet[]) => void;
};

export const usePetStore = create<TPetStore>()((set) => ({
   pets: [],
   setPets: () => set((state) => ({ pets: state.pets })),
}));
