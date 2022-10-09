import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HomePageData } from './types';
import { HYDRATE } from 'next-redux-wrapper';

const { NEXT_PUBLIC_BASE_API } = process.env;

export const dataApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: NEXT_PUBLIC_BASE_API as string }),
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getHomePageData: build.query<HomePageData, void>({
      query: () => '/data/page-home',
    }),
  }),
});

export const {
  useGetHomePageDataQuery,
  util: { getRunningOperationPromises },
} = dataApi;

export const { getHomePageData } = dataApi.endpoints;
