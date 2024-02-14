import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAdsQuery } from '../../redux/RequestsWithAds/serviceQuery';
import { selectSearchByAdsTitle } from '../../redux/selectedFile/selectedFile';
import MainSearch from '../../components/MainSearch/MainSearch';
import CardsItemAdvertising from '../../components/MainContent/CardsItemAdvertising';
import SkeletonMainAds from '../../components/UI/Skeletons/SkeletonMainAds';
import * as S from './Main.styled';

function Main() {
    const { data, isLoading, isError, error } = useGetAdsQuery();
    const [ads, setAds] = useState([]);

    useEffect(() => {
        setAds(data);
    }, [data]);

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
                {isLoading ? (
                    <SkeletonMainAds />
                ) : (
                    <>
                        {!searchLetter?.length ? (
                            <S.SpanErrorBlock>
                                По Вашему запросу объявлений не найдено.
                                Попробуйте ещё раз
                            </S.SpanErrorBlock>
                        ) : (
                            <>
                                {isError && (
                                    <S.SpanErrorBlock>
                                        Не удалось загрузить объявления,
                                        попробуйте позже: {error?.error}
                                    </S.SpanErrorBlock>
                                )}
                                <S.MainContent className="main__content">
                                    <S.ContentCards className="content__cards cards">
                                        {searchLetter
                                            ?.reverse()
                                            ?.map((cards) => (
                                                <CardsItemAdvertising
                                                    key={cards.id}
                                                    cards={cards}
                                                />
                                            ))}
                                    </S.ContentCards>
                                </S.MainContent>
                            </>
                        )}
                    </>
                )}
            </S.MainContainer>
        </S.Main>
    );
}

export default Main;
