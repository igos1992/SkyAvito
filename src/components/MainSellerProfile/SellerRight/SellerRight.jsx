import * as S from './SellerRight.styled';
import ShowPhoneButton from '../../UI/ShowPhoneButton/ShowPhoneButton';

function SellerRight() {
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
