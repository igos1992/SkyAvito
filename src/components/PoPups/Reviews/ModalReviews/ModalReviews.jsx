import * as S from './ModalReviews.styled';
// import ArrayComments from '../../../ArrayData/ArrayComments';
import { selectReviewsId } from '../../../../redux/RequestsWithAds/adsSlice';
import { useSelector } from 'react-redux';

function ModalReviews() {
    const reviewsId = useSelector(selectReviewsId);
    return (
        <>
            <S.ModalReviews className="modal__reviews reviews">
                {reviewsId.map((comm, id) => (
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
                                    {comm.author.name}{' '}
                                    <span>{comm.created_on}</span>
                                </S.ReviewName>
                                <S.ReviewTitle className="review__title font-t">
                                    Комментарий
                                </S.ReviewTitle>
                                <S.ReviewText className="review__text font-t">
                                    {comm.text}
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
