import * as S from './ModalReviews.styled';
import ArrayComments from '../../../ArrayData/ArrayComments';

function ModalReviews() {
    return (
        <>
            <S.ModalReviews className="modal__reviews reviews">
                {ArrayComments.map((comm, id) => (
                    <S.ReviewsReview
                        className="reviews__review review"
                        key={id}
                    >
                        <S.ReviewItem className="review__item">
                            <S.ReviewLeft className="review__left">
                                <S.ReviewImg className="review__img">
                                    <S.ReviewImgImg src="" alt="" />
                                </S.ReviewImg>
                            </S.ReviewLeft>
                            <S.ReviewRight className="review__right">
                                <S.ReviewName className="review__name font-t">
                                    {comm.ReviewName}
                                </S.ReviewName>
                                <S.ReviewTitle className="review__title font-t">
                                    {comm.ReviewTitle}
                                </S.ReviewTitle>
                                <S.ReviewText className="review__text font-t">
                                    {comm.ReviewText}
                                </S.ReviewText>
                            </S.ReviewRight>
                        </S.ReviewItem>
                    </S.ReviewsReview>
                ))}
            </S.ModalReviews>
        </>
    );
}

export default ModalReviews;
