import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IGalleryReqParams } from '../../interfaces/galleryReqParams.interface';
import { ISearchBreeds } from '../../interfaces/searchBreeds.interface';

import getUserKey from '../../utils/getUserKey';

const userKey = getUserKey();

export const petsApi = createApi({
  reducerPath: 'petsApi',
  tagTypes: ['pets', 'all-breeds', 'breed', 'breeds', 'votes', 'favourites'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', 'd49f1049-a767-4757-828d-c1aadac129ba');
      return headers;
    },
  }),
  endpoints: (build) => ({
    // gallery requests
    getGallery: build.query({
      query: (params: IGalleryReqParams) => ({
        url: 'images/search',
        params,
      }),
      providesTags: ['pets'],
    }),

    uploadImage: build.mutation({
      query: (file) => ({
        url: 'images/upload',
        method: 'POST',
        body: { file, sub_id: userKey },
      }),
    }),

    getImage: build.query({
      query: (img_id: string) => `images/${img_id}`,
    }),

    // breeds requests
    getAllBreeds: build.query({
      query: () => 'breeds',
      providesTags: ['all-breeds'],
    }),
    getBreed: build.query({
      query: (params: { breed_id: string }) => ({
        url: 'images/search',
        params,
      }),
      providesTags: ['breed'],
    }),
    getBreeds: build.query({
      query: (
        params: Partial<{
          attach_breed: number;
          limit: number;
          page: number;
        }>,
      ) => ({
        url: 'breeds',
        params,
      }),
      providesTags: ['breeds'],
    }),
    getSearchBreeds: build.query({
      query: (params: ISearchBreeds) => ({
        url: 'breeds/search',
        params,
      }),
      providesTags: ['breeds'],
    }),

    // favourites requests
    getFavourites: build.query({
      query: () => ({
        url: 'favourites',
        params: { sub_id: userKey },
      }),
      providesTags: ['favourites'],
    }),
    addFavourite: build.mutation({
      query: (image_id: string) => ({
        url: 'favourites',
        method: 'POST',
        body: { image_id, sub_id: userKey },
      }),
      invalidatesTags: ['favourites'],
    }),
    deleteFavourite: build.mutation({
      query: (favourite_id: number) => ({
        url: `favourites/${favourite_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['favourites'],
    }),

    // voting requests
    getVoteFor: build.query({
      query: () => ({
        url: 'images/search',
        params: { limit: 1, size: 'full' },
      }),
    }),
    getVotes: build.query({
      query: () => ({
        url: 'votes',
        params: { sub_id: userKey },
      }),
      providesTags: ['votes'],
    }),
    addVote: build.mutation({
      query: (body: { image_id: string; value: 1 | 0 }) => ({
        url: 'votes',
        method: 'POST',
        body: { ...body, sub_id: userKey },
      }),
      invalidatesTags: ['votes'],
    }),
    deleteVote: build.mutation({
      query: (vote_id: number) => ({
        url: `votes/${vote_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['votes'],
    }),
  }),
});

export const {
  useGetGalleryQuery,
  useUploadImageMutation,
  useGetBreedQuery,
  useGetImageQuery,
  useGetBreedsQuery,
  useGetAllBreedsQuery,
  useGetSearchBreedsQuery,
  useGetFavouritesQuery,
  useAddFavouriteMutation,
  useDeleteFavouriteMutation,
  useGetVoteForQuery,
  useGetVotesQuery,
  useAddVoteMutation,
  useDeleteVoteMutation,
} = petsApi;
