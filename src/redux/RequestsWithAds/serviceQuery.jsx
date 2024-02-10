import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from './authSlice';

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
        baseUrl: 'http://localhost:8090/',

        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.access;
            console.debug('Использую токен из стора', { token });
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    });

    const result = await baseQuery(args, api, extraOptions);
    console.debug('Результат первого запроса', { result });

    if (result?.error?.status !== 401) {
        return result;
    }

    const forceLogout = () => {
        console.debug('Принудительная авторизация!');
        api.dispatch(setAuth(null));
        window.location.navigate('/login');
    };

    const { auth } = api.getState();
    console.debug('Данные пользователя в сторе', { auth });
    if (!auth.refresh) {
        return forceLogout();
    }

    const refreshResult = await baseQuery(
        {
            url: '/auth/login/',
            method: 'PUT',
            body: {
                access_token: auth.access,
                refresh_token: auth.refresh,
            },
        },
        api,
        extraOptions,
    );

    console.debug('Результат запроса на обновление токена', { refreshResult });

    if (!refreshResult.data?.access_token) {
        return forceLogout();
    }

    api.dispatch(
        setAuth({
            ...auth,
            access: refreshResult.data?.access_token,
            refresh: refreshResult.data?.refresh_token,
        }),
    );

    const retryResult = await baseQuery(args, api, extraOptions);

    if (retryResult?.error?.status === 401) {
        return forceLogout();
    }

    console.debug('Повторный запрос завершился успешно');

    return retryResult;
};

export const fetchUsersToken = createApi({
    reducerPath: 'fetchUsersToken',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        // Добавить пользователя:
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
        // Получить токены / Generate tokens
        getTokenAndLogin: builder.mutation({
            query: ({ email, password }) => ({
                url: '/auth/login',
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
        // Обновить токены / Refresh tokens
        getTokenRefresh: builder.mutation({
            query: () => ({
                url: '/auth/login',
                method: 'PUT',
                body: JSON.stringify({
                    refresh: `Bearer ${localStorage.getItem('refresh_token')}`,
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
    tagTypes: ['Users'],
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        // Получить текущего пользователя
        getUser: builder.mutation({
            query: () => ({
                url: '/user',
                method: 'GET',
            }),
        }),
        // Получить аватарку текущего пользователя
        getUserAvatar: builder.query({
            query: () => ({
                url: '/user',
                method: 'GET',
            }),
            providesTags: [{ type: 'Users', id: 'LIST' }],
        }),
        // Изменить запись текущего пользователя:
        changeTheRecordOfTheCurrentUser: builder.mutation({
            query: ({ name, surname, phone, city }) => ({
                url: '/user',
                method: 'PATCH',
                body: JSON.stringify({
                    name,
                    surname,
                    phone,
                    city,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
        // Получить всех пользователей
        getAllUser: builder.query({
            query: () => ({
                url: '/user/all',
                method: 'GET',
            }),
        }),
        // Загрузить аватарку для пользователя
        uploadAnAvatarForTheUser: builder.mutation({
            query: (formData) => ({
                url: '/user/avatar',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
    }),
});

export const RequestsWithAds = createApi({
    reducerPath: 'RequestsWithAds',
    tagTypes: ['Ads', 'AdsUser'],
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        // Получить все объявления.
        getAds: builder.query({
            query: () => `ads`,
            providesTags: [
                { type: 'Ads', id: 'LIST' },
                { type: 'AdsUser', id: 'LIST' },
            ],
        }),
        // Создать объявление без изображений
        getCreateAdsWithoutImages: builder.mutation({
            query: ({ title, description, price }) => ({
                url: `adstext`,
                method: 'POST',
                body: JSON.stringify({
                    title,
                    description,
                    price,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            }),
            invalidatesTags: [
                { type: 'Ads', id: 'LIST' },
                { type: 'AdsUser', id: 'LIST' },
            ],
        }),

        // Загрузить картинку в объявление
        getUploadImagesAd: builder.mutation({
            query: ({ image, id }) => {
                const formData = new FormData();
                formData.append('file', image);
                return {
                    url: `/ads/${id}/image`,
                    method: 'POST',
                    body: formData,
                };
            },
            invalidatesTags: [
                { type: 'Ads', id: 'LIST' },
                { type: 'AdsUser', id: 'LIST' },
            ],
        }),

        // Получить объявление по ID:
        getAdsID: builder.query({
            query: (pk) => ({
                url: `ads/${pk}`,
            }),
            providesTags: [
                { type: 'Ads', id: 'LIST' },
                { type: 'AdsUser', id: 'LIST' },
            ],
        }),
        // Получить все объявления текущего пользователя.
        getAllTheAdsOfTheCurrentUser: builder.query({
            query: () => '/ads/me',
            headers: {
                'content-type': 'application/json',
            },
            providesTags: [{ type: 'Ads', id: 'LIST' }],
        }),
        // Изменить объявление
        getEditAd: builder.mutation({
            query: ({ id, title, description, price }) => ({
                url: `ads/${id}`,
                method: 'PATCH',
                body: JSON.stringify({
                    title,
                    description,
                    price,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            }),
            invalidatesTags: [
                { type: 'Ads', id: 'LIST' },
                { type: 'AdsUser', id: 'LIST' },
            ],
        }),
        // Удалить объявление по ID
        getDeleteAdId: builder.mutation({
            query: (pk) => ({
                url: `ads/${pk}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Ads', id: 'LIST' }],
        }),
        // Получить все комментарии по объявлению.
        getAllComments: builder.query({
            query: (pk) => ({
                url: `ads/${pk}/comments`,
                method: 'GET',
            }),
            providesTags: [{ type: 'Ads', id: 'LIST' }],
        }),
        // Создать комментарий к объявлению:
        getCreateCommentAd: builder.mutation({
            query: ({ id, text }) => ({
                url: `ads/${id}/comments`,
                method: 'POST',
                body: JSON.stringify({
                    text,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            }),
            invalidatesTags: [{ type: 'Ads', id: 'LIST' }],
        }),
    }),
});

export const {
    useGetTokenAndLoginMutation,
    useGetUserSignUpMutation,
    useGetTokenRefreshMutation,
} = fetchUsersToken;

export const {
    useGetUserMutation,
    useGetUserAvatarQuery,
    useChangeTheRecordOfTheCurrentUserMutation,
    useGetAllUserQuery,
    useUploadAnAvatarForTheUserMutation,
} = OperationsWithUsers;

export const {
    useGetAdsQuery,
    useGetAdsIDQuery,
    useGetUploadImagesAdMutation,
    useGetAllCommentsQuery,
    useGetAllTheAdsOfTheCurrentUserQuery,
    useGetCreateAdsWithoutImagesMutation,
    useGetCreateCommentAdMutation,
    useGetDeleteAdIdMutation,
    useGetEditAdMutation,
} = RequestsWithAds;
