// import { useContext } from 'react';
// import { UserContext } from '../../UserContext/UserContext';
// import MainContent from '../../components/MainContent/MainContent';
import MainMenu from '../../components/MainMenu/MainMenu';
import MainProfile from '../../components/MainProfile/MainProfile';
import * as S from './Profile.styled';
import {
    useGetAllTheAdsOfTheCurrentUserQuery,
    useGetUserQuery,
} from '../../redux/RequestsWithAds/serviceQuery';
import { useParams } from 'react-router-dom';
import CardsItemAdvertising from '../../components/MainContent/CardsItemAdvertising/CardsItemAdvertising';
import SkeletonMainAds from '../../components/UI/Skeletons/SkeletonMainAds';

function Profile() {
    // const { userData } = useContext(UserContext);
    // console.log(userData);

    const params = useParams();
    const { data: currentUser } = useGetUserQuery();

    const { data: adsCurrentUser, isLoading } =
        useGetAllTheAdsOfTheCurrentUserQuery(Number(params.id));
    console.log(adsCurrentUser);

    return (
        <S.Main className="main">
            <S.MainContainer className="main__container">
                <S.MainCenterBlock className="main__center-block">
                    <MainMenu />

                    <S.MainH2 className="main__h2">
                        Здравствуйте, {currentUser?.name}!
                    </S.MainH2>

                    <MainProfile currentUser={currentUser} />

                    <S.MainTitle className="main__title title">
                        Мои товары
                    </S.MainTitle>
                </S.MainCenterBlock>
                {isLoading ? (
                    <SkeletonMainAds />
                ) : (
                    <S.MainContent className="main__content">
                        {adsCurrentUser?.length === 0 ? (
                            <S.SpanNotTracksFavorite>
                                У вас пока нет объявлений
                            </S.SpanNotTracksFavorite>
                        ) : (
                            <S.ContentCards className="content__cards cards">
                                {adsCurrentUser?.map((cards) => (
                                    <CardsItemAdvertising
                                        key={cards.id}
                                        cards={cards}
                                    />
                                ))}
                            </S.ContentCards>
                        )}
                    </S.MainContent>
                )}
            </S.MainContainer>
        </S.Main>
    );
}

export default Profile;
