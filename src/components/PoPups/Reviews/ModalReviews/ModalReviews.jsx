import { useSelector } from 'react-redux';
import { selectReviewsId } from '../../../../redux/selectedFile/selectedFile';
import * as S from './ModalReviews.styled';
import ChangeDate from '../../../UI/СhangeDate/СhangeDate';

function ModalReviews() {
    const reviewsId = useSelector(selectReviewsId);

    return (
        <>
            <S.ModalReviews className="modal__reviews reviews">
                {reviewsId.map((comm) => (
                    <S.ReviewsReview
                        className="reviews__review review"
                        key={comm.id}
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
                                    <ChangeDate comm={comm.created_on} />
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
