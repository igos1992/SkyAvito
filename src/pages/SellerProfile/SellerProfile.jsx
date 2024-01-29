import MainContent from '../../components/MainContent/MainContent';
import MainMenu from '../../components/MainMenu/MainMenu';
import SellerLeft from '../../components/MainSellerProfile/SellerImg/SellerLeft';
import SellerRight from '../../components/MainSellerProfile/SellerRight/SellerRight';

import * as S from './SellerProfile.styled';

function SellerProfile() {
    return (
        <S.Main className="main">
            <S.MainContainer className="main__container">
                <S.MainCenterBlock className="main__center-block">
                    <MainMenu />

                    <S.MainH2 className="main__h2">Профиль продавца</S.MainH2>

                    <S.MainProfileSell className="main__profile-sell profile-sell">
                        <S.ProfileSellContent className="profile-sell__content">
                            <S.ProfileSellSeller className="profile-sell__seller seller">
                                <SellerLeft />
                                <SellerRight />
                            </S.ProfileSellSeller>
                        </S.ProfileSellContent>
                    </S.MainProfileSell>

                    <S.MainTitle className="main__title ">
                        Товары продавца
                    </S.MainTitle>
                </S.MainCenterBlock>
                <MainContent />
            </S.MainContainer>
        </S.Main>
    );
}

export default SellerProfile;
