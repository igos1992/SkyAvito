import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchByAdsTitle: '',
    reviewsId: '',
};

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        // поиск по названию объявления
        setSearchByAdsTitle: (state, action) => {
            state.searchByAdsTitle = action.payload;
        },
        setReviewsId: (state, action) => {
            state.reviewsId = action.payload;
        },
    },
});

export const { setSearchByAdsTitle, setReviewsId } = adsSlice.actions;

export const selectSearchByAdsTitle = (state) => state.ads.searchByAdsTitle;
export const selectReviewsId = (state) => state.ads.reviewsId;

export default adsSlice.reducer;
