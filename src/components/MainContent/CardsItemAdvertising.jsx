import * as S from './CardsItemAdvertising.styled';

function CardsItemAdvertising({ cards }) {
    return (
        <>
            <S.CardsItem className="cards__item" to={`/article/${cards?.id}`}>
                <S.CardsCard className="cards__card card">
                    <S.CardImage className="card__image">
                        {cards?.images[0] ? (
                            <S.CardImageItem
                                src={`http://localhost:8090/${cards?.images[0].url}`}
                                alt={cards.title}
                            />
                        ) : (
                            <p>Нет фото</p>
                        )}
                    </S.CardImage>
                    <S.CardContent className="card__content">
                        <S.CardTitle className="card__title">
                            {cards?.title}
                        </S.CardTitle>

                        <S.CardPrice className="card__price">
                            {cards?.price} ₽
                        </S.CardPrice>
                        <S.CardPlace className="card__place">
                            {cards?.user.city}
                        </S.CardPlace>
                        <S.CardDate className="card__date">
                            Сегодня в&nbsp;{cards?.user.sells_from}
                        </S.CardDate>
                    </S.CardContent>
                </S.CardsCard>
            </S.CardsItem>
        </>
    );
}

export default CardsItemAdvertising;
