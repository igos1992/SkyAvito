import ModalReviews from './ModalReviews/ModalReviews';
import * as S from './Reviews.styled';

function Reviews({ isOpen, onClose }) {
    return (
        <>
            {isOpen && (
                <S.Wrapper className="wrapper">
                    <S.ContainerBg className="container-bg">
                        <S.ModalBlock className="modal__block">
                            <S.ModalContent className="modal__content">
                                <S.ModalTitle className="modal__title">
                                    Отзывы о товаре
                                </S.ModalTitle>

                                <S.ModalBtnClose
                                    className="modal__btn-close"
                                    onClick={() => onClose()}
                                >
                                    <S.ModalBtnCloseLine className="modal__btn-close-line" />
                                </S.ModalBtnClose>

                                <S.ModalScroll className="modal__scroll">
                                    <S.ModalFormNewArt
                                        className="modal__form-newArt form-newArt"
                                        id="formNewArt"
                                        action="#"
                                    >
                                        <S.FormNewArtBlock className="form-newArt__block">
                                            <S.FormNewArtBlockLabel htmlFor="formArea">
                                                Добавить отзыв
                                            </S.FormNewArtBlockLabel>
                                            <S.FormNewArtArea
                                                className="form-newArt__area"
                                                name="text"
                                                id="formArea"
                                                cols="auto"
                                                rows="5"
                                                placeholder="Введите описание"
                                            ></S.FormNewArtArea>
                                        </S.FormNewArtBlock>
                                        <S.FormNewArtBtnPub
                                            className="form-newArt__btn-pub btn-hov02"
                                            id="btnPublish"
                                        >
                                            Опубликовать
                                        </S.FormNewArtBtnPub>
                                    </S.ModalFormNewArt>

                                    <ModalReviews />
                                </S.ModalScroll>
                            </S.ModalContent>
                        </S.ModalBlock>
                    </S.ContainerBg>
                </S.Wrapper>
            )}
        </>
    );
}

export default Reviews;
