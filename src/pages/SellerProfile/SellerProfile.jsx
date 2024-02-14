import { useParams } from 'react-router-dom';
import {
    useGetAdsQuery,
    useGetAllUserQuery,
} from '../../redux/RequestsWithAds/serviceQuery';
import MainMenu from '../../components/MainMenu/MainMenu';
import SellerLeft from '../../components/MainSellerProfile/SellerImg/SellerLeft';
import SellerRight from '../../components/MainSellerProfile/SellerRight/SellerRight';
import CardsItemAdvertising from '../../components/MainContent/CardsItemAdvertising';
import SkeletonMainAds from '../../components/UI/Skeletons/SkeletonMainAds';
import * as S from './SellerProfile.styled';

function SellerProfile() {
    const { userId } = useParams();

    const { data: usersAllAds, isLoading, isError, error } = useGetAdsQuery();
    const { data: users, isLoading: isLoadingAvatar } = useGetAllUserQuery();

    const sellerAllAds = usersAllAds?.filter(
        (item) => item.user.id === Number(userId),
    );
    const sellerId = users?.find((user) => user.id === Number(userId));

    return (
        <S.Main className="main">
            <S.MainContainer className="main__container">
                <S.MainCenterBlock className="main__center-block">
                    <MainMenu />
                    <S.MainH2 className="main__h2">Профиль продавца</S.MainH2>
                    <S.MainProfileSell className="main__profile-sell profile-sell">
                        <S.ProfileSellContent className="profile-sell__content">
                            <S.ProfileSellSeller className="profile-sell__seller seller">
                                <SellerLeft
                                    sellerId={sellerId}
                                    isLoadingAvatar={isLoadingAvatar}
                                />
                                <SellerRight />
                            </S.ProfileSellSeller>
                        </S.ProfileSellContent>
                    </S.MainProfileSell>

                    <S.MainTitle className="main__title ">
                        Товары продавца
                    </S.MainTitle>
                </S.MainCenterBlock>
                {isLoading ? (
                    <SkeletonMainAds />
                ) : (
                    <>
                        {isError && (
                            <S.SpanErrorBlock>
                                Не удалось загрузить объявления, попробуйте
                                позже: {error?.error}
                            </S.SpanErrorBlock>
                        )}
                        <S.MainContent className="main__content">
                            <S.ContentCards className="content__cards cards">
                                {sellerAllAds?.map((cards) => (
                                    <CardsItemAdvertising
                                        key={cards.id}
                                        cards={cards}
                                    />
                                ))}
                            </S.ContentCards>
                        </S.MainContent>
                    </>
                )}
            </S.MainContainer>
        </S.Main>
    );
}

export default SellerProfile;
