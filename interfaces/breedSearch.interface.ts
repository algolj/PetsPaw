import { IBreed } from './breed.interface';

export interface IBreedSearch {
  breeds: IBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
}
