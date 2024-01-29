import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const RequestsWithAds = createApi({
    reducerPath: 'RequestsWithAds',
    tagTypes: ['Ads'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/' }),
    endpoints: (build) => ({
        getAds: build.query({
            query: () => `ads`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: 'Ads',
                              id,
                          })),
                          { type: 'Ads', id: 'LIST' },
                      ]
                    : [{ type: 'Ads', id: 'LIST' }],
        }),
    }),
});

export const { useGetAdsQuery } = RequestsWithAds;
