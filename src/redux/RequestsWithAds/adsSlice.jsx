import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchByAdsTitle: '',
    reviewsId: '',
    currentUser: {},
    // currentAds: {},
};

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        // поиск по названию объявления
        setSearchByAdsTitle: (state, action) => {
            state.searchByAdsTitle = action.payload;
        },
        // ID комментария
        setReviewsId: (state, action) => {
            state.reviewsId = action.payload;
        },
        // Текущий пользователь
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        // // Текущее объявление
        // setCurrentAds: (state, action) => {
        //     state.currentAds = action.payload;
        // },
    },
});

export const {
    setSearchByAdsTitle,
    setReviewsId,
    setCurrentUser,
    // setCurrentAds,
} = adsSlice.actions;

export const selectSearchByAdsTitle = (state) => state.ads.searchByAdsTitle;
export const selectReviewsId = (state) => state.ads.reviewsId;
export const selectCurrentUser = (state) => state.ads.currentUser;
// export const selectCurrentAds = (state) => state.ads.currentAds;

export default adsSlice.reducer;
