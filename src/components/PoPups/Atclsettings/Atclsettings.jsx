import { useForm } from 'react-hook-form';
import FormNewArtBarImg from '../FormNewArtBarImg/FormNewArtBarImg';
// import ModalBtnClose from '../ModalBtnClose/ModalBtnClose';
import * as S from './Atclsettings.styled';
import { useGetEditAdMutation } from '../../../redux/RequestsWithAds/serviceQuery';
import { useParams } from 'react-router-dom';

function Atclsettings({ isOpen, onClose, dataAds }) {
    console.log(dataAds);

    const { id } = useParams();

    const [editAd] = useGetEditAdMutation(Number(id));

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = async ({ title, description, price }) => {
        await editAd({
            id,
            title: title,
            description: description,
            price: price,
        });
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
                                {/* <ModalBtnClose /> */}
                                <S.ModalBtnClose
                                    className="modal__btn-close"
                                    onClick={() => onClose()}
                                >
                                    <S.ModalBtnCloseLine className="modal__btn-close-line" />
                                </S.ModalBtnClose>
                                <S.ModalFormNewArt
                                    className="modal__form-newArt form-newArt"
                                    id="formNewArt"
                                    action="#"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <S.FormNewArtBlock className="form-newArt__block">
                                        <S.FormNewArtBlockLabel htmlFor="name">
                                            Название
                                        </S.FormNewArtBlockLabel>
                                        <S.FormNewArtInput
                                            className="form-newArt__input"
                                            type="text"
                                            name="title"
                                            id="formName"
                                            placeholder="Введите название"
                                            defaultValue={dataAds?.title}
                                            {...register('title', {
                                                required: false,
                                                onChange: (event) => {
                                                    event.target.defaultValue;
                                                },
                                            })}
                                        />
                                        <S.FillInTheField>
                                            {errors.title && (
                                                <S.FillInTheFieldP>
                                                    {errors.title.message ||
                                                        'Error!'}
                                                </S.FillInTheFieldP>
                                            )}
                                        </S.FillInTheField>
                                    </S.FormNewArtBlock>
                                    <S.FormNewArtBlock className="form-newArt__block">
                                        <S.FormNewArtBlockLabel htmlFor="text">
                                            Описание
                                        </S.FormNewArtBlockLabel>
                                        <S.FormNewArtArea
                                            className="form-newArt__area"
                                            name="description"
                                            id="formArea"
                                            cols="auto"
                                            rows="10"
                                            placeholder="Введите описание"
                                            defaultValue={dataAds?.description}
                                            {...register('description', {
                                                required: false,
                                                onChange: (event) => {
                                                    event.target.defaultValue;
                                                },
                                            })}
                                        />
                                        <S.FillInTheField>
                                            {errors.description && (
                                                <S.FillInTheFieldP>
                                                    {errors.description
                                                        .message || 'Error!'}
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
                                        <FormNewArtBarImg />
                                    </S.FormNewArtBlock>
                                    <S.FormNewArtBlock className="form-newArt__block block-price">
                                        <S.FormNewArtBlockLabel htmlFor="price">
                                            Цена
                                        </S.FormNewArtBlockLabel>
                                        <S.FormNewArtInputPrice
                                            className="form-newArt__input-price"
                                            type="text"
                                            name="price"
                                            id="formName"
                                            defaultValue={dataAds?.price}
                                            {...register('price', {
                                                required: false,
                                                onChange: (event) => {
                                                    event.target.defaultValue;
                                                },
                                            })}
                                        />
                                        <S.FillInTheField>
                                            {errors.price && (
                                                <S.FillInTheFieldP>
                                                    {errors.price.message ||
                                                        'Error!'}
                                                </S.FillInTheFieldP>
                                            )}
                                        </S.FillInTheField>
                                        <S.FormNewArtInputPriceCover className="form-newArt__input-price-cover" />
                                    </S.FormNewArtBlock>

                                    <S.FormNewArtBtnPub
                                        className="form-newArt__btn-pub btn-hov02"
                                        id="btnPublish"
                                        type="submit"
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
