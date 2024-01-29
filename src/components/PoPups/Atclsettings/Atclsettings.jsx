import FormNewArtBarImg from '../FormNewArtBarImg/FormNewArtBarImg';
import ModalBtnClose from '../ModalBtnClose/ModalBtnClose';
import * as S from './Atclsettings.styled';

function Atclsettings() {
    return (
        <S.Wrapper className="wrapper">
            <S.ContainerBg className="container-bg">
                <S.ModalBlock className="modal__block">
                    <S.ModalContent className="modal__content">
                        <S.ModalTitle className="modal__title">
                            Редактировать объявление
                        </S.ModalTitle>
                        <ModalBtnClose />
                        <S.ModalFormNewArt
                            className="modal__form-newArt form-newArt"
                            id="formNewArt"
                            action="#"
                        >
                            <S.FormNewArtBlock className="form-newArt__block">
                                <S.FormNewArtBlockLabel htmlFor="name">
                                    Название
                                </S.FormNewArtBlockLabel>
                                <S.FormNewArtInput
                                    className="form-newArt__input"
                                    type="text"
                                    name="name"
                                    id="formName"
                                    placeholder="Введите название"
                                    // value="Ракетка для большого тенниса Triumph Pro STС Б/У"
                                />
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock className="form-newArt__block">
                                <S.FormNewArtBlockLabel htmlFor="text">
                                    Описание
                                </S.FormNewArtBlockLabel>
                                <S.FormNewArtArea
                                    className="form-newArt__area"
                                    name="text"
                                    id="formArea"
                                    cols="auto"
                                    rows="10"
                                    placeholder="Введите описание"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </S.FormNewArtArea>
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
                                    // value="2 200"
                                />
                                <S.FormNewArtInputPriceCover className="form-newArt__input-price-cover" />
                            </S.FormNewArtBlock>

                            <S.FormNewArtBtnPub
                                className="form-newArt__btn-pub btn-hov02"
                                id="btnPublish"
                            >
                                Сохранить
                            </S.FormNewArtBtnPub>
                        </S.ModalFormNewArt>
                    </S.ModalContent>
                </S.ModalBlock>
            </S.ContainerBg>
        </S.Wrapper>
    );
}

export default Atclsettings;
