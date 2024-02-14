import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeDate from '../../UI/СhangeDate/СhangeDate';
import { useGetAllUserQuery } from '../../../redux/RequestsWithAds/serviceQuery';
import ShowPhoneButton from '../../UI/ShowPhoneButton/ShowPhoneButton';
import SkeletonSellerData from '../../UI/Skeletons/SkeletonSellerData';
import * as S from './SellerRight.styled';

function SellerRight() {
    const { userId } = useParams();
    const { data: users, isLoading } = useGetAllUserQuery();
    const sellerId = users?.find((user) => user.id === Number(userId));
    const [isShowPhone, setIsShowPhone] = useState(false);

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
                    </S.SellerImgMobBlock>
                    <ShowPhoneButton
                        sellerId={sellerId}
                        isShowPhone={isShowPhone}
                        setIsShowPhone={setIsShowPhone}
                    />
                </>
            )}
        </S.SellerRight>
    );
}

export default SellerRight;
