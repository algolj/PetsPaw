import { IBreedsFilter } from './breedsFilter.interface';
import { IDarkLightTheme } from './darkLightTheme.interface';
import { IGalleryParams } from './galleryParams.interface';

export interface IStore {
  galleryFilter: IGalleryParams;
  breedsFilter: IBreedsFilter;
  darkLightTheme: IDarkLightTheme;
}
