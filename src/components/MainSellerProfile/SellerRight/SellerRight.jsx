import * as S from './SellerRight.styled';
import ShowPhoneButton from '../../UI/ShowPhoneButton/ShowPhoneButton';
import { useGetAllTheAdsOfTheCurrentUserQuery } from '../../../redux/RequestsWithAds/serviceQuery';
import { useParams } from 'react-router-dom';

function SellerRight() {
    const params = useParams();

    const { data } = useGetAllTheAdsOfTheCurrentUserQuery(Number(params.id));
    console.log(data);

    return (
        <S.SellerRight className="seller__right">
            <S.SellerTitle className="seller__title">
                Кирилл Матвеев
            </S.SellerTitle>
            <S.SellerCity className="seller__city">
                Санкт-Петербург
            </S.SellerCity>
            <S.SellerInfo className="seller__info">
                Продает товары с августа 2021
            </S.SellerInfo>

            <S.SellerImgMobBlock className="seller__img-mob-block">
                <S.SellerImgMob className="seller__img-mob">
                    <a href="" target="_self">
                        <S.SellerImgMobItem src="#" alt="" />
                    </a>
                </S.SellerImgMob>
            </S.SellerImgMobBlock>

            <ShowPhoneButton />
        </S.SellerRight>
    );
}

export default SellerRight;
