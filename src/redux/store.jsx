import { configureStore } from '@reduxjs/toolkit';
import {
    RequestsWithAds,
    fetchUsersToken,
    OperationsWithUsers,
} from './RequestsWithAds/serviceQuery';
import { authReducer } from './RequestsWithAds/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [RequestsWithAds.reducerPath]: RequestsWithAds.reducer,
        [fetchUsersToken.reducerPath]: fetchUsersToken.reducer,
        [OperationsWithUsers.reducerPath]: OperationsWithUsers.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(RequestsWithAds.middleware)
            .concat(fetchUsersToken.middleware)
            .concat(OperationsWithUsers.middleware),
});

export default store;
