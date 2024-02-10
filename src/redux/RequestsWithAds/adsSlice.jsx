import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // getAllAds: [],
    // getUserAds: [],
    // getSellerAds: [],
    searchByAdsTitle: '',
    reviewsId: '',
    // currentUser: {},
    currentAds: {},
    idUserAds: ''
};

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        // // Все обявдения
        // setGetAllAds: (state, action) => {
        //     state.getAllAds = action.payload;
        // },
        // // Обявления пользователя
        // setGetUserAds: (state, action) => {
        //     state.getUserAds = action.payload;
        // },
        // // Объявления продавца
        // setGetSellerAds: (state, action) => {
        //     state.getSellerAds = action.payload;
        // },
        // поиск по названию объявления
        setSearchByAdsTitle: (state, action) => {
            state.searchByAdsTitle = action.payload;
        },
        // ID комментария
        setReviewsId: (state, action) => {
            state.reviewsId = action.payload;
        },
        // // Текущий пользователь
        // setCurrentUser: (state, action) => {
        //     state.currentUser = action.payload;
        // },
        // Текущее объявление
        setCurrentAds: (state, action) => {
            state.currentAds = action.payload;
        },
        // ID пользователя
        setIdUserAds: (state, action) => {
            state.idUserAds = action.payload;
        }
    },
});

export const {
    setGetAllAds,
    setGetUserAds,
    setSearchByAdsTitle,
    setReviewsId,
    // setCurrentUser,
    setCurrentAds,
    setIdUserAds
} = adsSlice.actions;

export const selectGetAllAds = (state) => state.ads.getAllAds;
export const selectGetUserAds = (state) => state.ads.getUserAds;
export const selectGetSellerAds = (state) => state.ads.getSellerAds;
export const selectSearchByAdsTitle = (state) => state.ads.searchByAdsTitle;
export const selectReviewsId = (state) => state.ads.reviewsId;
// export const selectCurrentUser = (state) => state.ads.currentUser;
export const selectCurrentAds = (state) => state.ads.currentAds;
export const selectIdUserAds = (state) => state.ads.idUserAds;

export default adsSlice.reducer;
