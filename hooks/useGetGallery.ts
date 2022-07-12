import { IGalleryParams } from '../interfaces/galleryParams.interface';
import { IGalleryReqParams } from '../interfaces/galleryReqParams.interface';

import { useGetGalleryQuery } from '../store';

// hook for formatting gallery request
// parameters to acceptable for our API

const useGetGallery = (params: IGalleryParams) => {
  const staticMime = ['jpg', 'png'];
  const animatedMime = ['gif'];

  const mimeType = {
    All: [...staticMime, ...animatedMime],
    Static: staticMime,
    Animated: animatedMime,
  };

  const config = {
    ...params,
    size: 'med',
    mime_types: mimeType[params.mime_types],
    format: 'json',
  };

  return useGetGalleryQuery(config as IGalleryReqParams);
};

export default useGetGallery;
