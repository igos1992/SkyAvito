import FormNewArtBarImg from '../FormNewArtBarImg/FormNewArtBarImg';
import * as S from './Addnewat.styled';
import {
    useGetCreateAdsWithoutImagesMutation,
    useGetUploadImagesAdMutation,
} from '../../../redux/RequestsWithAds/serviceQuery';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

function Addnewat({ isOpen, onClose }) {
    const [createAds] = useGetCreateAdsWithoutImagesMutation();
    const [getUploadImagesAd] = useGetUploadImagesAdMutation();
    const [selectedFile, setSelectedFile] = useState([]);
    const [upload, setUpload] = useState();
    const filePicker = useRef(null);

    console.log(upload);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur',
    });

    const handleImages = (event) => {
        console.log(event.target.files);
        setSelectedFile([...selectedFile, event.target.files?.[0]]);
    };

    console.log(selectedFile);

    const handlePick = () => {
        filePicker.current.click();
    };

    const onSubmit = async ({ title, description, price }) => {
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
                        id: res?.data.id,
                    }).then((data) => {
                        console.log(data);
                        setUpload(data);
                    });
                });
            }
            return res;
        });
        reset()
    };

    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [price, setPrice] = useState('');

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
                                    id="formNewArt"
                                    // action="#"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <S.ModalBtnClose
                                        className="modal__btn-close"
                                        onClick={() => onClose()}
                                    >
                                        <S.ModalBtnCloseLine className="modal__btn-close-line" />
                                    </S.ModalBtnClose>
                                    {/* <S.ModalFormNewArt
                                    className="modal__form-newArt form-newArt"
                                    id="formNewArt"
                                    // action="#"
                                    onSubmit={handleSubmit(onSubmit)}
                                > */}
                                    <S.FormNewArtBlock className="form-newArt__block">
                                        <S.FormNewArtBlockLabel htmlFor="formName">
                                            Название
                                        </S.FormNewArtBlockLabel>
                                        <S.FormNewArtInput
                                            className="form-newArt__input"
                                            type="text"
                                            name="title"
                                            id="formName"
                                            placeholder="Введите название"
                                            autoComplete="on"
                                            // value={title}
                                            // onChange={(event) => {
                                            //     setTitle(event.target.value);
                                            // }}
                                            {...register('title', {
                                                required:
                                                    'Добавьте, пожалуйста, название',
                                                // onChange: (event) => {
                                                //     setTitle(
                                                //         event.target.value,
                                                //     );
                                                // },
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
                                        <S.FormNewArtBlockLabel htmlFor="formArea">
                                            Описание
                                        </S.FormNewArtBlockLabel>
                                        <S.FormNewArtArea
                                            className="form-newArt__area"
                                            name="description"
                                            id="formArea"
                                            cols="auto"
                                            rows="10"
                                            placeholder="Введите описание"
                                            // value={description}
                                            // onChange={(event) => {
                                            //     setDescription(
                                            //         event.target.value,
                                            //     );
                                            // }}
                                            {...register('description', {
                                                required:
                                                    'Добавьте, пожалуйста, описание товара',
                                                // onChange: (event) => {
                                                //     setDescription(
                                                //         event.target.value,
                                                //     );
                                                // },
                                            })}
                                        ></S.FormNewArtArea>
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
                                        {/* Перебрать массив фотографий */}
                                        <FormNewArtBarImg
                                            handlePick={handlePick}
                                            filePicker={filePicker}
                                            handleImages={handleImages}
                                        />
                                    </S.FormNewArtBlock>
                                    <S.FormNewArtBlock className="form-newArt__block block-price">
                                        <S.FormNewArtBlockLabel htmlFor="formNameOne">
                                            Цена
                                        </S.FormNewArtBlockLabel>
                                        <S.FormNewArtInputPrice
                                            className="form-newArt__input-price"
                                            type="text"
                                            name="price"
                                            id="formNameOne"
                                            autoComplete="on"
                                            // value={price}
                                            // onChange={(event) => {
                                            //     setPrice(event.target.value);
                                            // }}
                                            {...register('price', {
                                                required:
                                                    'Укажите, пожалуйста, цену',
                                                // onChange: (event) => {
                                                //     setPrice(
                                                //         event.target.value,
                                                //     );
                                                // },
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
                                        id="btnPublish"
                                        type="submit"
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
