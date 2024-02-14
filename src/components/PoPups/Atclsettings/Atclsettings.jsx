import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    useGetEditAdMutation,
    useGetUploadImagesAdMutation,
} from '../../../redux/RequestsWithAds/serviceQuery';
import { setAddingImagesAtclsettings } from '../../../redux/RequestsWithAds/adsSlice';
import FormNewArtBarImgAtclsettings from './FormNewArtBarImgAtclsettings/FormNewArtBarImgAtclsettings';
import * as S from './Atclsettings.styled';

function Atclsettings({ isOpen, onClose, dataAds }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [getUploadImagesAd] = useGetUploadImagesAdMutation();
    const [editAd] = useGetEditAdMutation(Number(id));
    const [offButton, setOffButton] = useState(false);
    const [selectedFile, setSelectedFile] = useState([]);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
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
            dispatch(setAddingImagesAtclsettings(reader.result));
        };

        setSelectedFile([...selectedFile, event.target.files[0]]);
    };

    const onSubmit = async ({ title, description, price }) => {
        setOffButton(true);
        await editAd({
            id,
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
                                    Редактировать объявление
                                </S.ModalTitle>

                                <S.ModalBtnClose
                                    className="modal__btn-close"
                                    onClick={() => onClose()}
                                >
                                    <S.ModalBtnCloseLine className="modal__btn-close-line" />
                                </S.ModalBtnClose>
                                <S.ModalFormNewArt
                                    className="modal__form-newArt form-newArt"
                                    action="#"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <S.FormNewArtBlock className="form-newArt__block">
                                        <S.FormNewArtBlockLabel>
                                            Название
                                        </S.FormNewArtBlockLabel>
                                        <S.FormNewArtInput
                                            className="form-newArt__input"
                                            type="text"
                                            name="title"
                                            placeholder="Введите название"
                                            defaultValue={dataAds?.title}
                                            {...register('title', {
                                                required: true,
                                                onChange: (event) => {
                                                    event.target.defaultValue;
                                                },
                                            })}
                                        />
                                        <S.FillInTheField>
                                            {errors.title && (
                                                <S.FillInTheFieldP>
                                                    {errors.title.message ||
                                                        'Добавьте, пожалуйста, название!'}
                                                </S.FillInTheFieldP>
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
                                            defaultValue={dataAds?.description}
                                            {...register('description', {
                                                required: true,
                                                onChange: (event) => {
                                                    event.target.defaultValue;
                                                },
                                            })}
                                        />
                                        <S.FillInTheField>
                                            {errors.description && (
                                                <S.FillInTheFieldP>
                                                    {errors.description
                                                        .message ||
                                                        'Добавьте, пожалуйста, описание товара!'}
                                                </S.FillInTheFieldP>
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
                                        <FormNewArtBarImgAtclsettings
                                            dataAds={dataAds}
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
                                            defaultValue={dataAds?.price}
                                            {...register('price', {
                                                required: true,
                                                onChange: (event) => {
                                                    event.target.defaultValue;
                                                },
                                                pattern: {
                                                    value: /^[0-9+-]+$/,
                                                    message:
                                                        'Ведите цену цифрами',
                                                },
                                            })}
                                        />
                                        <S.FillInTheField>
                                            {errors.price && (
                                                <S.FillInTheFieldP>
                                                    {errors.price.message ||
                                                        'Укажите, пожалуйста, цену'}
                                                </S.FillInTheFieldP>
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
                                        Сохранить
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

export default Atclsettings;
