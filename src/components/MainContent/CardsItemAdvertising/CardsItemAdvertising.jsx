import * as S from './CardsItemAdvertising.styled';
// import ArrayData from '../../ArrayData/ArrayData';
import { useGetAdsQuery } from '../../../redux/RequestsWithAds/serviceQuery';
import { selectSearchByAdsTitle } from '../../../redux/RequestsWithAds/adsSlice';
import { useSelector } from 'react-redux';

function CardsItemAdvertising() {
    const { data } = useGetAdsQuery();
    // console.log(data?.id);
    // console.log(data);
    // console.log(localStorage.getItem('user'));
    const searchByAdsTitleText = useSelector(selectSearchByAdsTitle);
    const searchLetter = data?.filter((cards) => {
        const matchesTitle = cards.title
            .toLowerCase()
            .includes(searchByAdsTitleText.toLowerCase());
        return matchesTitle;
    });

    // console.log(searchLetter);

    return (
        <>
            {searchLetter?.map((cards) => (
                <S.CardsItem className="cards__item" key={cards.id}>
                    <S.CardsCard className="cards__card card">
                        <S.CardImage className="card__image">
                            <a href="#" target="_blank">
                                <S.CardImageItem
                                    src={cards.images?.url}
                                    alt="picture"
                                />
                            </a>
                        </S.CardImage>
                        <S.CardContent className="card__content">
                            <S.TitleLink to={`/article/${cards.id}`}>
                                <S.CardTitle className="card__title">
                                    {cards.title}
                                </S.CardTitle>
                            </S.TitleLink>
                            <S.CardPrice className="card__price">
                                {cards.price} ₽
                            </S.CardPrice>
                            <S.CardPlace className="card__place">
                                {cards.user.city}
                            </S.CardPlace>
                            <S.CardDate className="card__date">
                                Сегодня в&nbsp;{cards.user.sells_from}
                            </S.CardDate>
                        </S.CardContent>
                    </S.CardsCard>
                </S.CardsItem>
            ))}
        </>
    );
}

export default CardsItemAdvertising;
