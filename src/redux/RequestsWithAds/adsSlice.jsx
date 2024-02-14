import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchByAdsTitle: '',
    reviewsId: '',
    addingImages: [],
    addingImagesAvatar: '',
    addingImagesAtclsettings: [],
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

        // Сохранение картинок для отображения когда добавляют в объявление
        setAddingImages: (state, action) => {
            state.addingImages.push(action.payload);
        },
        // Сохранение картинок для отображения при редактировании объявление
        setAddingImagesAtclsettings: (state, action) => {
            state.addingImagesAtclsettings.push(action.payload);
        },
        // Сохранить добавленную аватарку перед запросом
        setAddingImagesAvatar: (state, action) => {
            state.addingImagesAvatar = action.payload;
        },
        // Сохранение аватарки для отображения когда добавляем объявление
        setClearingImagesAvatar: (state) => {
            state.addingImages = [];
        },
    },
});

export const {
    setSearchByAdsTitle,
    setReviewsId,
    setAddingImages,
    setAddingImagesAvatar,
    setClearingImagesAvatar,
    setAddingImagesAtclsettings,
} = adsSlice.actions;

export default adsSlice.reducer;
