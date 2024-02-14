import * as S from './Main.styled';
import MainSearch from '../../components/MainSearch/MainSearch';
// import MainContent from '../../components/MainContent/MainContent';
import CardsItemAdvertising from '../../components/MainContent/CardsItemAdvertising/CardsItemAdvertising';
import { useGetAdsQuery } from '../../redux/RequestsWithAds/serviceQuery';
import { useSelector } from 'react-redux';
import { selectSearchByAdsTitle } from '../../redux/RequestsWithAds/adsSlice';
import { useEffect, useState } from 'react';
import SkeletonMainAds from '../../components/UI/Skeletons/SkeletonMainAds';

function Main() {
    const { data, isLoading } = useGetAdsQuery();
    const [ads, setAds] = useState([]);
    // console.log(ads);

    useEffect(() => {
        setAds(data);
    }, [data]);
    // console.log(data);
    const searchByAdsTitleText = useSelector(selectSearchByAdsTitle);
    const searchLetter = ads?.filter((cards) => {
        const matchesTitle = cards.title
            .toLowerCase()
            .includes(searchByAdsTitleText.toLowerCase());
        return matchesTitle;
    });

    console.log(searchLetter);

    return (
        <S.Main className="main">
            <MainSearch />
            <S.MainContainer className="main__container">
                <S.MainH2 className="main__h2">Объявления</S.MainH2>
                {isLoading ? (
                    <SkeletonMainAds />
                ) : (
                    <S.MainContent className="main__content">
                        <S.ContentCards className="content__cards cards">
                            {searchLetter?.reverse()?.map((cards) => (
                                <CardsItemAdvertising
                                    key={cards.id}
                                    cards={cards}
                                />
                            ))}
                        </S.ContentCards>
                    </S.MainContent>
                )}
            </S.MainContainer>
        </S.Main>
    );
}

export default Main;
