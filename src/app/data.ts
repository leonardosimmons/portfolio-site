import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HomePageData } from './types';
import { HYDRATE } from 'next-redux-wrapper';

export const dataApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? `${process.env.NEXT_PUBLIC_API_URL as string}/api`
        : `https://${process.env.NEXT_PUBLIC_API_URL as string}/api`,
  }),
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
