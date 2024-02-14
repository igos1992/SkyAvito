import * as S from './ArticleBlock.styled';
import Reviews from '../../../PoPups/Reviews/Reviews';
import { useEffect, useState } from 'react';
import {
    useGetAdsIDQuery,
    useGetAllCommentsQuery,
} from '../../../../redux/RequestsWithAds/serviceQuery';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setReviewsId } from '../../../../redux/RequestsWithAds/adsSlice';
import ShowPhoneButton from '../../../UI/ShowPhoneButton/ShowPhoneButton';
import SkeletonArticleArticleBlock from '../../../UI/Skeletons/SkeletonArticleArticleBlock';
import SkeletonArticleBlockComments from '../../../UI/Skeletons/SkeletonArticleBlockComments';
import ChangeDate from '../../../UI/СhangeDate/СhangeDate';
// import date from 'date-and-time';

function ArticleBlock({ dataAds, isLoading }) {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();

    const [modalProductReviewsIsOpen, setModalProductReviewsIsOpen] =
        useState(false);
    const { data: dataComments, isLoading: isLoadingComments } =
        useGetAllCommentsQuery(Number(id));

    const { data: dataSeller } = useGetAdsIDQuery(Number(id));

    useEffect(() => {
        dispatch(setReviewsId(dataComments));
    }, [dataComments, dataAds, dataSeller]);

    const [isShowPhone, setIsShowPhone] = useState(false);

    console.log(dataAds);

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

    // function dateHourSecond(data) {
    //     const dateHourSecond = new Date(data);

    //     // функция добавляющая ведущий ноль
    //     function leadingZero(token) {
    //         return ('0' + token).slice(-2);
    //     }

    //     const year = dateHourSecond.getFullYear(),
    //         month = leadingZero(dateHourSecond.getMonth() + 1), // подсчет начинается с 0, поэтому увеличим на 1
    //         day = leadingZero(dateHourSecond.getDate()),
    //         hours = leadingZero(dateHourSecond.getHours()),
    //         minutes = leadingZero(dateHourSecond.getMinutes()),
    //         seconds = leadingZero(dateHourSecond.getSeconds());
    //         let result = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
    //         result = result.toLocaleString()
    //         console.log(result);
    //     // return date.preparse(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`, '    MMM YYYY DD HH:mm:ss [GMT]Z');
    // }
    // // console.log(result);
    // console.log(dataAds?.created_on);

    return (
        <S.ArticleBlock className="article__block">
            <S.ArticleInfo className="article__info">
                <S.ArticleTitle className="article__date">
                    {dataAds?.title}
                </S.ArticleTitle>{' '}
                <S.ArticleDate className="article__date">
                    {/* Сегодня в {date.format(now, 'hh:mm', dataAds?.created_on, false)} */}
                    <ChangeDate dataAds={dataAds?.created_on} />
                    {/* {dataAds?.created_on} */}
                </S.ArticleDate>{' '}
                <S.ArticleCity className="article__city">
                    {dataAds?.user?.city}{' '}
                </S.ArticleCity>
                {isLoadingComments ? (
                    <SkeletonArticleBlockComments />
                ) : (
                    <S.ArticleLink
                        className="article__link"
                        href=""
                        target="_blank"
                        rel=""
                        onClick={() => setModalProductReviewsIsOpen(true)}
                    >
                        {dataComments?.length} {quantityReviews}
                    </S.ArticleLink>
                )}
                <Reviews
                    isOpen={modalProductReviewsIsOpen}
                    onClose={() => setModalProductReviewsIsOpen(false)}
                />
            </S.ArticleInfo>
            <S.ArticlePrice className="article__price">
                {dataAds?.price} ₽
            </S.ArticlePrice>

            {isLoading ? (
                <SkeletonArticleArticleBlock />
            ) : (
                <>
                    <ShowPhoneButton
                        dataAds={dataAds}
                        isShowPhone={isShowPhone}
                        setIsShowPhone={setIsShowPhone}
                    />
                    <S.ArticleAuthor className="article__author author">
                        <S.AuthorImgItem
                            className="author__img-item"
                            to={`/sellerProfile/${dataAds?.user.id}`}
                        >
                            <S.AuthorImg
                                className="author__img"
                                src={`http://localhost:8090/${dataAds?.user?.avatar}`}
                                alt=""
                            />
                        </S.AuthorImgItem>
                        <S.AuthorCont className="author__cont">
                            <S.AuthorName className="author__name">
                                <S.AuthorNameLink
                                    to={`/sellerProfile/${dataAds?.user.id}`}
                                >
                                    {dataAds?.user.name}
                                </S.AuthorNameLink>
                            </S.AuthorName>
                            <S.AuthorAbout className="author__about">
                                {/* Продает товары с августа 2021  */}
                                {/* <ChangeDate  /> */}
                                Продает товары с{' '}
                                <ChangeDate
                                    dataAds={dataAds?.user?.sells_from}
                                />
                                {/* {dataAds?.user.sells_from} */}
                            </S.AuthorAbout>
                        </S.AuthorCont>
                    </S.ArticleAuthor>
                </>
            )}
        </S.ArticleBlock>
    );
}

export default ArticleBlock;
