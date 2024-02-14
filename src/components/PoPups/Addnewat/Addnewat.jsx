import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import FormNewArtBarImg from './FormNewArtBarImg/FormNewArtBarImg';
import {
    useGetCreateAdsWithoutImagesMutation,
    useGetUploadImagesAdMutation,
} from '../../../redux/RequestsWithAds/serviceQuery';
import {
    setAddingImages,
    setClearingImagesAvatar,
} from '../../../redux/RequestsWithAds/adsSlice';

import * as S from './Addnewat.styled';

function Addnewat({ isOpen, onClose }) {
    const dispatch = useDispatch();
    const [createAds] = useGetCreateAdsWithoutImagesMutation();
    const [getUploadImagesAd] = useGetUploadImagesAdMutation();
    const [selectedFile, setSelectedFile] = useState([]);

    const [offButton, setOffButton] = useState(false);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const handleImages = (event) => {
        console.log(event.target.files);
        const reader = new FileReader();
        if (!event.target.files[0]) {
            return;
        }
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
            dispatch(setAddingImages(reader.result));
        };

        setSelectedFile([...selectedFile, event.target.files[0]]);
    };

    const onSubmit = async ({ title, description, price }) => {
        setOffButton(true);
        await createAds({
            title: title,
            description: description,
            price: price,
        }).then((res) => {
            console.log(res);
            if (selectedFile.length > 0) {
                selectedFile.forEach(async (image) => {
                    await getUploadImagesAd({
                        image,
                        id: res?.data?.id,
                    }).then((data) => {
                        console.log(data);
                    });
                });
            }
            return res;
        });
        dispatch(setClearingImagesAvatar());
        reset();
        isValid;
        setOffButton(false);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <S.Wrapper className="wrapper">
                    <S.ContainerBg className="container-bg">
                        <S.ModalBlock className="modal__block">
                            <S.ModalContent className="modal__content">
                                <S.ModalTitle className="modal__title">
                                    Новое объявление
                                </S.ModalTitle>
                                <S.ModalFormNewArt
                                    className="modal__form-newArt form-newArt"
                                    // action="#"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <S.ModalBtnClose
                                        className="modal__btn-close"
                                        onClick={() => onClose()}
                                    >
                                        <S.ModalBtnCloseLine className="modal__btn-close-line" />
                                    </S.ModalBtnClose>
                                    <S.FormNewArtBlock className="form-newArt__block">
                                        <S.FormNewArtBlockLabel>
                                            Название
                                        </S.FormNewArtBlockLabel>
                                        <S.FormNewArtInput
                                            className="form-newArt__input"
                                            type="text"
                                            name="title"
                                            placeholder="Введите название"
                                            autoComplete="on"
                                            {...register('title', {
                                                required:
                                                    'Добавьте, пожалуйста, название',
                                            })}
                                        />
                                        <S.FillInTheField>
                                            {errors.title && (
                                                <p>
                                                    {errors.title.message ||
                                                        'Error!'}
                                                </p>
                                            )}
                                        </S.FillInTheField>
                                    </S.FormNewArtBlock>
                                    <S.FormNewArtBlock className="form-newArt__block">
                                        <S.FormNewArtBlockLabel>
                                            Описание
                                        </S.FormNewArtBlockLabel>
                                        <S.FormNewArtArea
                                            className="form-newArt__area"
                                            name="description"
                                            cols="auto"
                                            rows="10"
                                            placeholder="Введите описание"
                                            {...register('description', {
                                                required:
                                                    'Добавьте, пожалуйста, описание товара',
                                            })}
                                        />
                                        <S.FillInTheField>
                                            {errors.description && (
                                                <p>
                                                    {errors.description
                                                        .message || 'Error!'}
                                                </p>
                                            )}
                                        </S.FillInTheField>
                                    </S.FormNewArtBlock>
                                    <S.FormNewArtBlock className="form-newArt__block">
                                        <S.FormNewArtP className="form-newArt__p">
                                            Фотографии товара
                                            <S.FormNewArtPSpan>
                                                не более 5 фотографий
                                            </S.FormNewArtPSpan>
                                        </S.FormNewArtP>
                                        <FormNewArtBarImg
                                            handleImages={handleImages}
                                        />
                                    </S.FormNewArtBlock>
                                    <S.FormNewArtBlock className="form-newArt__block block-price">
                                        <S.FormNewArtBlockLabel>
                                            Цена
                                        </S.FormNewArtBlockLabel>
                                        <S.FormNewArtInputPrice
                                            className="form-newArt__input-price"
                                            type="text"
                                            name="price"
                                            autoComplete="on"
                                            {...register('price', {
                                                required:
                                                    'Укажите, пожалуйста, цену',
                                                pattern: {
                                                    value: /^[0-9+-]+$/,
                                                    message:
                                                        'Ведите цену цифрами',
                                                },
                                            })}
                                        />
                                        <S.FillInTheField>
                                            {errors.price && (
                                                <p>
                                                    {errors.price.message ||
                                                        'Error!'}
                                                </p>
                                            )}
                                        </S.FillInTheField>
                                        <S.FormNewArtInputPriceCover className="form-newArt__input-price-cover" />
                                    </S.FormNewArtBlock>

                                    <S.FormNewArtBtnPub
                                        className="form-newArt__btn-pub btn-hov02"
                                        type="submit"
                                        disabled={
                                            isValid ? offButton : !isValid
                                        }
                                    >
                                        Опубликовать
                                    </S.FormNewArtBtnPub>
                                </S.ModalFormNewArt>
                            </S.ModalContent>
                        </S.ModalBlock>
                    </S.ContainerBg>
                </S.Wrapper>
            )}
        </>
    );
}

export default Addnewat;
