import * as S from './Main.styled';
import MainSearch from '../../components/MainSearch/MainSearch';
// import MainContent from '../../components/MainContent/MainContent';
import CardsItemAdvertising from '../../components/MainContent/CardsItemAdvertising/CardsItemAdvertising';
import { useGetAdsQuery } from '../../redux/RequestsWithAds/serviceQuery';
import { useSelector } from 'react-redux';
import { selectSearchByAdsTitle } from '../../redux/RequestsWithAds/adsSlice';
import { useEffect, useState } from 'react';

function Main() {
    const { data } = useGetAdsQuery();
    const [ads, setAds] = useState([]);
    // console.log(ads);

    useEffect(() => {
        setAds(data);
        // console.log(data);
    }, [data]);
    // console.log(data);
    const searchByAdsTitleText = useSelector(selectSearchByAdsTitle);
    const searchLetter = ads?.filter((cards) => {
        const matchesTitle = cards.title
            .toLowerCase()
            .includes(searchByAdsTitleText.toLowerCase());
        return matchesTitle;
    });

    return (
        <S.Main className="main">
            <MainSearch />
            <S.MainContainer className="main__container">
                <S.MainH2 className="main__h2">Объявления</S.MainH2>
                <S.MainContent className="main__content">
                    <S.ContentCards className="content__cards cards">
                        {searchLetter?.reverse()?.map((cards) => (
                            <CardsItemAdvertising
                                key={cards.id}
                                cards={cards}
                                // searchLetter={searchLetter}
                            />
                        ))}
                    </S.ContentCards>
                </S.MainContent>
                {/* <MainContent /> */}
            </S.MainContainer>
        </S.Main>
    );
}

export default Main;
