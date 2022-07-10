import { IBreedsFilter } from './breedsFilter.interface';
import { IGalleryParams } from './galleryParams.interface';

export interface IStore {
  galleryFilter: IGalleryParams;
  breedsFilter: IBreedsFilter;
}
