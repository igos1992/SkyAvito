import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    useGetEditAdMutation,
    useGetUploadImagesAdMutation,
} from '../../../redux/RequestsWithAds/serviceQuery';
import {
    // setAddingImagesAtclsettings,
    setAddingImagesAvatarAtclsettingsFive,
    setAddingImagesAvatarAtclsettingsFour,
    setAddingImagesAvatarAtclsettingsOne,
    setAddingImagesAvatarAtclsettingsThrees,
    setAddingImagesAvatarAtclsettingsTwo,
} from '../../../redux/RequestsWithAds/adsSlice';
// import FormNewArtBarImgAtclsettings from './FormNewArtBarImgAtclsettings/FormNewArtBarImgAtclsettings';
import * as S from './Atclsettings.styled';
import {
    selectAddingImagesAvatarAtclsettingsFive,
    selectAddingImagesAvatarAtclsettingsFour,
    selectAddingImagesAvatarAtclsettingsOne,
    selectAddingImagesAvatarAtclsettingsThrees,
    selectAddingImagesAvatarAtclsettingsTwo,
} from '../../../redux/selectedFile/selectedFile';

function Atclsettings({ isOpen, onClose, dataAds }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const filePicker = useRef(null);
    const [getUploadImagesAd] = useGetUploadImagesAdMutation();
    const [editAd] = useGetEditAdMutation(Number(id));
    const [offButton, setOffButton] = useState(false);
    const [selectedFileOne, setSelectedFileOne] = useState([]);
    const [selectedFileTwo, setSelectedFileTwo] = useState([]);
    const [selectedFileThrees, setSelectedFileThrees] = useState([]);
    const [selectedFileFour, setSelectedFileFour] = useState([]);
    const [selectedFileFive, setSelectedFileFive] = useState([]);

    const imagesAvatarAtclsettingsOne = useSelector(
        selectAddingImagesAvatarAtclsettingsOne,
    );
    console.log(imagesAvatarAtclsettingsOne);

    const imagesAvatarAtclsettingsTwo = useSelector(
        selectAddingImagesAvatarAtclsettingsTwo,
    );

    const imagesAvatarAtclsettingsThrees = useSelector(
        selectAddingImagesAvatarAtclsettingsThrees,
    );

    const imagesAvatarAtclsettingsFour = useSelector(
        selectAddingImagesAvatarAtclsettingsFour,
    );

    const imagesAvatarAtclsettingsFive = useSelector(
        selectAddingImagesAvatarAtclsettingsFive,
    );

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const handleImagesOne = (event) => {
        const reader = new FileReader();
        if (!event.target.files[0]) {
            return;
        }
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
            dispatch(setAddingImagesAvatarAtclsettingsOne(reader.result));
            console.log(reader.result);
        };
        setSelectedFileOne([...selectedFileOne, event.target.files[0]]);
    };

    const handleImagesTwo = (event) => {
        const reader = new FileReader();
        if (!event.target.files[0]) {
            return;
        }
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
            dispatch(setAddingImagesAvatarAtclsettingsTwo(reader.result));
        };
        setSelectedFileTwo([...selectedFileTwo, event.target.files[0]]);
    };

    const handleImagesThrees = (event) => {
        const reader = new FileReader();
        if (!event.target.files[0]) {
            return;
        }
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
            dispatch(setAddingImagesAvatarAtclsettingsThrees(reader.result));
        };
        setSelectedFileThrees([...selectedFileThrees, event.target.files[0]]);
    };

    const handleImagesFour = (event) => {
        const reader = new FileReader();
        if (!event.target.files[0]) {
            return;
        }
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
            dispatch(setAddingImagesAvatarAtclsettingsFour(reader.result));
        };
        setSelectedFileFour([...selectedFileFour, event.target.files[0]]);
    };

    const handleImagesFive = (event) => {
        const reader = new FileReader();
        if (!event.target.files[0]) {
            return;
        }
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
            dispatch(setAddingImagesAvatarAtclsettingsFive(reader.result));
        };
        setSelectedFileFive([...selectedFileFive, event.target.files[0]]);
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

            if (selectedFileOne.length > 0) {
                selectedFileOne.forEach(async (image) => {
                    console.log(image);
                    await getUploadImagesAd({
                        image,
                        id: res?.data?.id,
                    }).then((data) => {
                        console.log(data);
                    });
                });
                setSelectedFileOne([]);
            }
            if (selectedFileTwo.length > 0) {
                selectedFileTwo.forEach(async (image) => {
                    await getUploadImagesAd({
                        image,
                        id: res?.data?.id,
                    }).then((data) => {
                        console.log(data);
                    });
                });
                setSelectedFileTwo([]);
            }
            if (selectedFileThrees.length > 0) {
                selectedFileThrees.forEach(async (image) => {
                    await getUploadImagesAd({
                        image,
                        id: res?.data?.id,
                    }).then((data) => {
                        console.log(data);
                    });
                });
                setSelectedFileThrees([]);
            }
            if (selectedFileFour.length > 0) {
                selectedFileFour.forEach(async (image) => {
                    await getUploadImagesAd({
                        image,
                        id: res?.data?.id,
                    }).then((data) => {
                        console.log(data);
                    });
                });
                setSelectedFileFour([]);
            }
            if (selectedFileFive.length > 0) {
                selectedFileFive.forEach(async (image) => {
                    await getUploadImagesAd({
                        image,
                        id: res?.data?.id,
                    }).then((data) => {
                        console.log(data);
                    });
                });
                setSelectedFileFive([]);
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

                                        <S.FormNewArtBarImg className="form-newArt__bar-img">
                                            <S.FormNewArtImg className="form-newArt__img">
                                                <S.FormNewArtImgCover
                                                    className="form-newArt__img-cover"
                                                    id="input"
                                                    type="file"
                                                    onChange={handleImagesOne}
                                                    multiple
                                                    accept=".jpg, .jpeg, .png,"
                                                    ref={filePicker}
                                                />

                                                {!imagesAvatarAtclsettingsOne &&
                                                !dataAds?.images[0]?.url ? (
                                                    <S.Label
                                                        htmlFor="input"
                                                        // onClick={handlePick}
                                                    />
                                                ) : (
                                                    <>
                                                        {imagesAvatarAtclsettingsOne ? (
                                                            <S.FormNewArtImgImg
                                                                src={
                                                                    imagesAvatarAtclsettingsOne
                                                                }
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <S.FormNewArtImgImg
                                                                src={`http://localhost:8090/${dataAds?.images[0]?.url}`}
                                                                alt=""
                                                            />
                                                        )}
                                                    </>
                                                )}
                                            </S.FormNewArtImg>

                                            <S.FormNewArtImg className="form-newArt__img">
                                                <S.FormNewArtImgCover
                                                    className="form-newArt__img-cover"
                                                    id="input1"
                                                    type="file"
                                                    onChange={handleImagesTwo}
                                                    multiple
                                                    accept=".jpg, .jpeg, .png,"
                                                    ref={filePicker}
                                                />

                                                {!imagesAvatarAtclsettingsTwo &&
                                                !dataAds?.images[1]?.url ? (
                                                    <S.Label htmlFor="input1" />
                                                ) : (
                                                    <>
                                                        {imagesAvatarAtclsettingsTwo ? (
                                                            <S.FormNewArtImgImg
                                                                src={
                                                                    imagesAvatarAtclsettingsTwo
                                                                }
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <S.FormNewArtImgImg
                                                                src={`http://localhost:8090/${dataAds?.images[1]?.url}`}
                                                                alt=""
                                                            />
                                                        )}
                                                    </>
                                                )}
                                            </S.FormNewArtImg>
                                            <S.FormNewArtImg className="form-newArt__img">
                                                <S.FormNewArtImgCover
                                                    className="form-newArt__img-cover"
                                                    id="input2"
                                                    type="file"
                                                    onChange={
                                                        handleImagesThrees
                                                    }
                                                    multiple
                                                    accept=".jpg, .jpeg, .png,"
                                                    ref={filePicker}
                                                />

                                                {!imagesAvatarAtclsettingsThrees &&
                                                !dataAds?.images[2]?.url ? (
                                                    <S.Label htmlFor="input2" />
                                                ) : (
                                                    <>
                                                        {imagesAvatarAtclsettingsThrees ? (
                                                            <S.FormNewArtImgImg
                                                                src={
                                                                    imagesAvatarAtclsettingsThrees
                                                                }
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <S.FormNewArtImgImg
                                                                src={`http://localhost:8090/${dataAds?.images[2]?.url}`}
                                                                alt=""
                                                            />
                                                        )}
                                                    </>
                                                )}
                                            </S.FormNewArtImg>
                                            <S.FormNewArtImg className="form-newArt__img">
                                                <S.FormNewArtImgCover
                                                    className="form-newArt__img-cover"
                                                    id="input3"
                                                    type="file"
                                                    onChange={handleImagesFour}
                                                    multiple
                                                    accept=".jpg, .jpeg, .png,"
                                                    ref={filePicker}
                                                />

                                                {!imagesAvatarAtclsettingsFour &&
                                                !dataAds?.images[3]?.url ? (
                                                    <S.Label htmlFor="input3" />
                                                ) : (
                                                    <>
                                                        {imagesAvatarAtclsettingsFour ? (
                                                            <S.FormNewArtImgImg
                                                                src={
                                                                    imagesAvatarAtclsettingsFour
                                                                }
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <S.FormNewArtImgImg
                                                                src={`http://localhost:8090/${dataAds?.images[3]?.url}`}
                                                                alt=""
                                                            />
                                                        )}
                                                    </>
                                                )}
                                            </S.FormNewArtImg>
                                            <S.FormNewArtImg className="form-newArt__img">
                                                <S.FormNewArtImgCover
                                                    className="form-newArt__img-cover"
                                                    id="input4"
                                                    type="file"
                                                    onChange={handleImagesFive}
                                                    multiple
                                                    accept=".jpg, .jpeg, .png,"
                                                    ref={filePicker}
                                                />

                                                {!imagesAvatarAtclsettingsFive &&
                                                !dataAds?.images[4]?.url ? (
                                                    <S.Label htmlFor="input4" />
                                                ) : (
                                                    <>
                                                        {imagesAvatarAtclsettingsFive ? (
                                                            <S.FormNewArtImgImg
                                                                src={
                                                                    imagesAvatarAtclsettingsFive
                                                                }
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <S.FormNewArtImgImg
                                                                src={`http://localhost:8090/${dataAds?.images[4]?.url}`}
                                                                alt=""
                                                            />
                                                        )}
                                                    </>
                                                )}
                                            </S.FormNewArtImg>
                                        </S.FormNewArtBarImg>
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
