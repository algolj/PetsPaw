import { IBreed } from './breed.interface';

export default interface IImageRes {
  breeds: IBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
}
