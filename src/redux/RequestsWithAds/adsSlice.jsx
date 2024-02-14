import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // getAllAds: [],
    // getUserAds: [],
    // getSellerAds: [],
    searchByAdsTitle: '',
    reviewsId: '',
    // currentUser: {},
    currentAds: {},
    idUserAds: '',
    addingImages: [],
    addingImagesAvatar: '',
    addingImagesAtclsettings: [],
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
        // Сохранение аватарки для отображения когда
        setClearingImagesAvatar: (state) => {
            state.addingImages = [];
        },
    },
});

export const {
    setGetAllAds,
    setGetUserAds,
    setSearchByAdsTitle,
    setReviewsId,
    // setCurrentUser,
    setCurrentAds,
    setIdUserAds,
    setAddingImages,
    setAddingImagesAvatar,
    setClearingImagesAvatar,
    setAddingImagesAtclsettings,
} = adsSlice.actions;

export const selectGetAllAds = (state) => state.ads.getAllAds;
export const selectGetUserAds = (state) => state.ads.getUserAds;
export const selectGetSellerAds = (state) => state.ads.getSellerAds;
export const selectSearchByAdsTitle = (state) => state.ads.searchByAdsTitle;
export const selectReviewsId = (state) => state.ads.reviewsId;
// export const selectCurrentUser = (state) => state.ads.currentUser;
export const selectCurrentAds = (state) => state.ads.currentAds;
export const selectIdUserAds = (state) => state.ads.idUserAds;
export const selectAddingImages = (state) => state.ads.addingImages;
export const selectAddingImagesAvatar = (state) => state.ads.addingImagesAvatar;
export const selectAddingImagesAtclsettings = (state) =>
    state.ads.addingImagesAtclsettings;

export default adsSlice.reducer;
