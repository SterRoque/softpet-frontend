import { IOwner } from './owner-interface';

export interface IPet {
   id: string;
   name: string;
   breed: string;
   species: 'CAT' | 'DOG';
   birthday_date: string;
   owner: IOwner;
}
