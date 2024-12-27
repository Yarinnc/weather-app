import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CitiesResponse } from '../types/city';

export const citiesApi = createApi({
  reducerPath: 'citiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getCities: builder.query<CitiesResponse, void>({
      query: () => 'data.json',
    }),
  }),
});

export const { useGetCitiesQuery } = citiesApi;
