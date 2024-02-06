import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from './authSlice';

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
        baseUrl: 'http://localhost:8090/',

        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.access;
            // console.debug('Использую токен из стора', { token });
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    });

    const result = await baseQuery(args, api, extraOptions);
    // console.debug('Результат первого запроса', { result });

    if (result?.error?.status !== 401) {
        return result;
    }

    const forceLogout = () => {
        // console.debug('Принудительная авторизация!');
        api.dispatch(setAuth(null));
        window.location.navigate('/login');
    };

    const { auth } = api.getState();
    // console.debug('Данные пользователя в сторе', { auth });
    if (!auth.refresh) {
        return forceLogout();
    }

    const refreshResult = await baseQuery(
        {
            url: '/auth/login/',
            method: 'PUT',
            body: {
                refresh: auth.refresh,
            },
        },
        api,
        extraOptions,
    );

    // console.debug('Результат запроса на обновление токена', { refreshResult });

    if (!refreshResult.data.access) {
        return forceLogout();
    }

    api.dispatch(setAuth({ ...auth, access: refreshResult.data.access }));

    const retryResult = await baseQuery(args, api, extraOptions);

    if (retryResult?.error?.status === 401) {
        return forceLogout();
    }

    // console.debug('Повторный запрос завершился успешно');

    return retryResult;
};

export const fetchUsersToken = createApi({
    reducerPath: 'fetchUsersToken',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getUserSignUp: builder.mutation({
            query: ({
                email,
                password,
                repeatPassword,
                name,
                surname,
                city,
            }) => ({
                url: 'auth/register',
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    repeatPassword,
                    name,
                    surname,
                    city,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            }),
        }),
        getTokenAndLogin: builder.mutation({
            query: ({ email, password }) => ({
                url: '/auth/login/',
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            }),
        }),
        getTokenRefresh: builder.mutation({
            query: () => ({
                url: '/auth/login/',
                method: 'PUT',
                body: JSON.stringify({
                    refresh: `Bearer ${localStorage.getItem('refresh')}`,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            }),
        }),
    }),
});

export const OperationsWithUsers = createApi({
    reducerPath: 'OperationsWithUsers',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getUser: builder.mutation({
            query: () => ({
                url: '/user',
                method: 'GET',
            }),
        }),
    }),
});

export const RequestsWithAds = createApi({
    reducerPath: 'RequestsWithAds',
    tagTypes: ['Ads'],
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getAds: builder.query({
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
        getAdsID: builder.query({
            query: (pk) => ({
                url: `ads/${pk}`,
            }),
        }),
        getAllComments: builder.query({
            query: (pk) => ({
                url: `ads/${pk}/comments`,
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
    }),
});

export const {
    useGetTokenAndLoginMutation,
    useGetUserSignUpMutation,
    useGetTokenRefreshMutation,
} = fetchUsersToken;

export const { useGetUserMutation } = OperationsWithUsers;

export const { useGetAdsQuery, useGetAdsIDQuery, useGetAllCommentsQuery } =
    RequestsWithAds;
