import * as S from './Addnewat.styled';

function Addnewat() {
    return (
        <S.Wrapper className="wrapper">
            <S.ContainerBg className="container-bg">
                <S.ModalBlock className="modal__block">
                    <S.ModalContent className="modal__content">
                        <S.ModalTitle className="modal__title">
                            Новое объявление
                        </S.ModalTitle>
                        <S.ModalBtnClose className="modal__btn-close">
                            <S.ModalBtnCloseLine className="modal__btn-close-line" />
                        </S.ModalBtnClose>
                        <S.ModalFormNewArt
                            className="modal__form-newArt form-newArt"
                            id="formNewArt"
                            action="#"
                        >
                            <S.FormNewArtBlock className="form-newArt__block">
                                <S.FormNewArtBlockLabel htmlFor="formName">Название</S.FormNewArtBlockLabel>
                                <S.FormNewArtInput
                                    className="form-newArt__input"
                                    type="text"
                                    name="name"
                                    id="formName"
                                    placeholder="Введите название"
                                    autoComplete="on"
                                />
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock className="form-newArt__block">
                                <S.FormNewArtBlockLabel htmlFor="formArea">Описание</S.FormNewArtBlockLabel>
                                <S.FormNewArtArea
                                    className="form-newArt__area"
                                    name="text"
                                    id="formArea"
                                    cols="auto"
                                    rows="10"
                                    placeholder="Введите описание"
                                ></S.FormNewArtArea>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock className="form-newArt__block">
                                <S.FormNewArtP className="form-newArt__p">
                                    Фотографии товара
                                    <S.FormNewArtPSpan>не более 5 фотографий</S.FormNewArtPSpan>
                                </S.FormNewArtP>
                                <S.FormNewArtBarImg className="form-newArt__bar-img">
                                    <S.FormNewArtImg className="form-newArt__img">
                                        <S.FormNewArtImgImg src="" alt="" />
                                        <S.FormNewArtImgCover className="form-newArt__img-cover" />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg className="form-newArt__img">
                                        <S.FormNewArtImgImg src="" alt="" />
                                        <S.FormNewArtImgCover className="form-newArt__img-cover" />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg className="form-newArt__img">
                                        <S.FormNewArtImgCover className="form-newArt__img-cover" />
                                        <S.FormNewArtImgImg src="" alt="" />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg className="form-newArt__img">
                                        <S.FormNewArtImgCover className="form-newArt__img-cover" />
                                        <S.FormNewArtImgImg src="" alt="" />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg className="form-newArt__img">
                                        <S.FormNewArtImgCover className="form-newArt__img-cover" />
                                        <S.FormNewArtImgImg src="" alt="" />
                                    </S.FormNewArtImg>
                                </S.FormNewArtBarImg>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock className="form-newArt__block block-price">
                                <S.FormNewArtBlockLabel htmlFor="formNameOne">Цена</S.FormNewArtBlockLabel>
                                <S.FormNewArtInputPrice
                                    className="form-newArt__input-price"
                                    type="text"
                                    name="price"
                                    id="formNameOne"
                                    autoComplete="on"
                                />
                                <S.FormNewArtInputPriceCover className="form-newArt__input-price-cover" />
                            </S.FormNewArtBlock>

                            <S.FormNewArtBtnPub
                                className="form-newArt__btn-pub btn-hov02"
                                id="btnPublish"
                            >
                                Опубликовать
                            </S.FormNewArtBtnPub>
                        </S.ModalFormNewArt>
                    </S.ModalContent>
                </S.ModalBlock>
            </S.ContainerBg>
        </S.Wrapper>
    );
}

export default Addnewat;
