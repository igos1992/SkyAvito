import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeDate from '../../UI/СhangeDate/СhangeDate';
import { useGetAllUserQuery } from '../../../redux/RequestsWithAds/serviceQuery';
import SkeletonSellerData from '../../UI/Skeletons/SkeletonSellerData';
import * as S from './SellerRight.styled';

function SellerRight() {
    const { userId } = useParams();
    const { data: users, isLoading } = useGetAllUserQuery();
    const sellerId = users?.find((user) => user.id === Number(userId));
    const [isShowPhone, setIsShowPhone] = useState(false);

    console.log(sellerId?.phone);

    return (
        <S.SellerRight className="seller__right">
            {isLoading ? (
                <SkeletonSellerData />
            ) : (
                <>
                    <S.SellerTitle className="seller__title">
                        {sellerId?.name}
                    </S.SellerTitle>
                    <S.SellerCity className="seller__city">
                        {sellerId?.city}
                    </S.SellerCity>
                    <S.SellerInfo className="seller__info">
                        Продает товары с{' '}
                        <ChangeDate sellerId={sellerId?.sells_from} />
                    </S.SellerInfo>
                    <S.SellerImgMobBlock className="seller__img-mob-block">
                        <S.SellerImgMob className="seller__img-mob">
                            <a href="" target="_self">
                                <S.SellerImgMobItem src="#" alt="" />
                            </a>
                        </S.SellerImgMob>
                        <S.ShowPhoneButton
                            className="article__btn btn-hov02"
                            onClick={setIsShowPhone}
                        >
                            {!isShowPhone ? (
                                <>
                                    <span>Показать&nbsp;телефон</span>
                                    <S.ShowPhoneButtonSpan className="article-span">
                                        {sellerId?.phone?.slice(0, 7)} XXX XX XX
                                    </S.ShowPhoneButtonSpan>
                                </>
                            ) : (
                                <>
                                    {!sellerId?.phone ? (
                                        <span>Номер телефона отсутствует</span>
                                    ) : (
                                        <S.ShowPhoneButtonSpan className="article-span">
                                            {sellerId?.phone}
                                        </S.ShowPhoneButtonSpan>
                                    )}
                                </>
                            )}
                        </S.ShowPhoneButton>
                    </S.SellerImgMobBlock>
                </>
            )}
        </S.SellerRight>
    );
}

export default SellerRight;
