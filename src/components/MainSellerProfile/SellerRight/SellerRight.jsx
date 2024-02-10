import * as S from './SellerRight.styled';
import ShowPhoneButton from '../../UI/ShowPhoneButton/ShowPhoneButton';
import { useGetAllUserQuery } from '../../../redux/RequestsWithAds/serviceQuery';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function SellerRight() {
    const { userId } = useParams();
    const [isShowPhone, setIsShowPhone] = useState(false);

    const { data: users } = useGetAllUserQuery();
    const sellerId = users?.find((user) => user.id === Number(userId));
    console.log(sellerId);

    

    return (
        <S.SellerRight className="seller__right">
            <S.SellerTitle className="seller__title">
                {sellerId?.name}
            </S.SellerTitle>
            <S.SellerCity className="seller__city">
                {sellerId?.city}
            </S.SellerCity>
            <S.SellerInfo className="seller__info">
                Продает товары с {sellerId?.sells_from}
            </S.SellerInfo>

            <S.SellerImgMobBlock className="seller__img-mob-block">
                <S.SellerImgMob className="seller__img-mob">
                    <a href="" target="_self">
                        <S.SellerImgMobItem src="#" alt="" />
                    </a>
                </S.SellerImgMob>
            </S.SellerImgMobBlock>

            <ShowPhoneButton
                sellerId={sellerId}
                isShowPhone={isShowPhone}
                setIsShowPhone={setIsShowPhone}
            />
        </S.SellerRight>
    );
}

export default SellerRight;
