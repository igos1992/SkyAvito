import * as S from './ArticleBlock.styled';
import ShowPhoneButton from '../../../UI/ShowPhoneButton/ShowPhoneButton';
import Reviews from '../../../PoPups/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { useGetAllCommentsQuery } from '../../../../redux/RequestsWithAds/serviceQuery';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setReviewsId } from '../../../../redux/RequestsWithAds/adsSlice';

function ArticleBlock({ dataAds }) {
    const params = useParams();
    const dispatch = useDispatch();

    console.log(dataAds);
    console.log(dataAds?.user);

    const [modalProductReviewsIsOpen, setModalProductReviewsIsOpen] =
        useState(false);
    const { data: dataComments } = useGetAllCommentsQuery(Number(params.id));

    useEffect(() => {
        dispatch(setReviewsId(dataComments));
    }, [dataComments]);
    

    let quantityReviews;

    switch (dataComments?.length) {
        case 1:
            quantityReviews = `отзыв`;
            break;
        case 2:
        case 3:
        case 4:
            quantityReviews = `отзыва`;
            break;

        default:
            quantityReviews = 'отзывов';
            break;
    }

    return (
        <>
            <S.ArticleBlock className="article__block">
                <S.ArticleTitle className="article__title title">
                    {dataAds?.title}
                </S.ArticleTitle>
                <S.ArticleInfo className="article__info">
                    <S.ArticleDate className="article__date">
                        {dataAds?.created_on}
                    </S.ArticleDate>
                    <S.ArticleCity className="article__city">
                        {dataAds?.user?.city}
                    </S.ArticleCity>
                    <S.ArticleLink
                        className="article__link"
                        href=""
                        target="_blank"
                        rel=""
                        onClick={() => setModalProductReviewsIsOpen(true)}
                    >
                        {dataComments?.length} {quantityReviews}
                    </S.ArticleLink>
                    <Reviews
                        isOpen={modalProductReviewsIsOpen}
                        onClose={() => setModalProductReviewsIsOpen(false)}
                    />
                </S.ArticleInfo>
                <S.ArticlePrice className="article__price">
                    {dataAds?.price} ₽
                </S.ArticlePrice>
                <ShowPhoneButton />
                <S.ArticleAuthor className="article__author author">
                    <S.AuthorImgItem className="author__img-item">
                        <S.AuthorImg className="author__img" src="" alt="" />
                    </S.AuthorImgItem>
                    <S.AuthorCont className="author__cont">
                        <S.AuthorName className="author__name">
                            <S.AuthorNameLink to={`/sellerProfile/${dataAds?.user.id}`}>
                                {dataAds?.user.name}
                            </S.AuthorNameLink>
                        </S.AuthorName>
                        <S.AuthorAbout className="author__about">
                            {/* Продает товары с августа 2021 */}
                            Продает товары с {dataAds?.user.sells_from}
                        </S.AuthorAbout>
                    </S.AuthorCont>
                </S.ArticleAuthor>
            </S.ArticleBlock>
        </>
    );
}

export default ArticleBlock;
