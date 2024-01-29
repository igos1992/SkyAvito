import * as S from './CardsItemAdvertising.styled';
// import ArrayData from '../../ArrayData/ArrayData';
import { useGetAdsQuery } from '../../../redux/RequestsWithAds/serviceQuery';

function CardsItemAdvertising() {
    const { data = [] } = useGetAdsQuery();
    console.log(data);
    console.log(data[0]);
    return (
        <>
            {data.map((cards) => (
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
                            <a href="" target="_blank">
                                <S.CardTitle className="card__title">
                                    {cards.title}
                                </S.CardTitle>
                            </a>
                            <S.CardPrice className="card__price">
                                {cards.price} P
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
