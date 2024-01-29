import { configureStore } from '@reduxjs/toolkit';
import { RequestsWithAds } from './RequestsWithAds/serviceQuery';

const store = configureStore({
    reducer: {
        [RequestsWithAds.reducerPath]: RequestsWithAds.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(RequestsWithAds.middleware),
});

export default store;
