import * as S from './Reviews.styled';

function Reviews() {
    return (
        <S.Wrapper class="wrapper">
            <S.ContainerBg class="container-bg">
                <S.ModalBlock class="modal__block">
                    <S.ModalContent class="modal__content">
                        <S.ModalTitle class="modal__title">
                            Отзывы о товаре
                        </S.ModalTitle>
                        <S.ModalBtnClose class="modal__btn-close">
                            <S.ModalBtnCloseLine class="modal__btn-close-line" />
                        </S.ModalBtnClose>
                        <S.ModalScroll class="modal__scroll">
                            <S.ModalFormNewArt
                                class="modal__form-newArt form-newArt"
                                id="formNewArt"
                                action="#"
                            >
                                <S.FormNewArtBlock class="form-newArt__block">
                                    <S.FormNewArtBlockLabel htmlFor="text">
                                        Добавить отзыв
                                    </S.FormNewArtBlockLabel>
                                    <S.FormNewArtArea
                                        class="form-newArt__area"
                                        name="text"
                                        id="formArea"
                                        cols="auto"
                                        rows="5"
                                        placeholder="Введите описание"
                                    ></S.FormNewArtArea>
                                </S.FormNewArtBlock>
                                <S.FormNewArtBtnPub
                                    class="form-newArt__btn-pub btn-hov02"
                                    id="btnPublish"
                                >
                                    Опубликовать
                                </S.FormNewArtBtnPub>
                            </S.ModalFormNewArt>

                            <S.ModalReviews class="modal__reviews reviews">
                                <S.ReviewsReview class="reviews__review review">
                                    <S.ReviewItem class="review__item">
                                        <S.ReviewLeft class="review__left">
                                            <S.ReviewImg class="review__img">
                                                <S.ReviewImgImg src="" alt="" />
                                            </S.ReviewImg>
                                        </S.ReviewLeft>
                                        <S.ReviewRight class="review__right">
                                            <S.ReviewName class="review__name font-t">
                                                Олег <span>14 августа</span>
                                            </S.ReviewName>
                                            <S.ReviewTitle class="review__title font-t">
                                                Комментарий
                                            </S.ReviewTitle>
                                            <S.ReviewText class="review__text font-t">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </S.ReviewText>
                                        </S.ReviewRight>
                                    </S.ReviewItem>
                                </S.ReviewsReview>

                                <S.ReviewsReview class="reviews__review review">
                                    <S.ReviewItem class="review__item">
                                        <S.ReviewLeft class="review__left">
                                            <S.ReviewImg class="review__img">
                                                <S.ReviewImgImg src="" alt="" />
                                            </S.ReviewImg>
                                        </S.ReviewLeft>
                                        <S.ReviewRight class="review__right">
                                            <S.ReviewName class="review__name font-t">
                                                Олег <span>14 августа</span>
                                            </S.ReviewName>
                                            <S.ReviewTitle class="review__title font-t">
                                                Комментарий
                                            </S.ReviewTitle>
                                            <S.ReviewText class="review__text font-t">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </S.ReviewText>
                                        </S.ReviewRight>
                                    </S.ReviewItem>
                                </S.ReviewsReview>

                                <S.ReviewsReview class="reviews__review review">
                                    <S.ReviewItem class="review__item">
                                        <S.ReviewLeft class="review__left">
                                            <S.ReviewImg class="review__img">
                                                <S.ReviewImgImg src="" alt="" />
                                            </S.ReviewImg>
                                        </S.ReviewLeft>
                                        <S.ReviewRight class="review__right">
                                            <S.ReviewName class="review__name font-t">
                                                Олег <span>14 августа</span>
                                            </S.ReviewName>
                                            <S.ReviewTitle class="review__title font-t">
                                                Комментарий
                                            </S.ReviewTitle>
                                            <S.ReviewText class="review__text font-t">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </S.ReviewText>
                                        </S.ReviewRight>
                                    </S.ReviewItem>
                                </S.ReviewsReview>

                                <S.ReviewsReview class="reviews__review review">
                                    <S.ReviewItem class="review__item">
                                        <S.ReviewLeft class="review__left">
                                            <S.ReviewImg class="review__img">
                                                <S.ReviewImgImg src="" alt="" />
                                            </S.ReviewImg>
                                        </S.ReviewLeft>
                                        <S.ReviewRight class="review__right">
                                            <S.ReviewName class="review__name font-t">
                                                Олег <span>14 августа</span>
                                            </S.ReviewName>
                                            <S.ReviewTitle class="review__title font-t">
                                                Комментарий
                                            </S.ReviewTitle>
                                            <S.ReviewText class="review__text font-t">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </S.ReviewText>
                                        </S.ReviewRight>
                                    </S.ReviewItem>
                                </S.ReviewsReview>

                                <S.ReviewsReview class="reviews__review review">
                                    <S.ReviewItem class="review__item">
                                        <S.ReviewLeft class="review__left">
                                            <S.ReviewImg class="review__img">
                                                <S.ReviewImgImg src="" alt="" />
                                            </S.ReviewImg>
                                        </S.ReviewLeft>
                                        <S.ReviewRight class="review__right">
                                            <S.ReviewName class="review__name font-t">
                                                Олег{' '}
                                                <S.ReviewNameSpan>
                                                    14 августа
                                                </S.ReviewNameSpan>
                                            </S.ReviewName>
                                            <S.ReviewTitle class="review__title font-t">
                                                Комментарий
                                            </S.ReviewTitle>
                                            <S.ReviewText class="review__text font-t">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </S.ReviewText>
                                        </S.ReviewRight>
                                    </S.ReviewItem>
                                </S.ReviewsReview>
                            </S.ModalReviews>
                        </S.ModalScroll>
                    </S.ModalContent>
                </S.ModalBlock>
            </S.ContainerBg>
        </S.Wrapper>
    );
}

export default Reviews;
