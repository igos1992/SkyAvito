import * as S from './Main.styled';

function Main() {
    return (
        <S.Wrapper>
            <S.Container className="container">
                <S.Header className="header">
                    <S.HeaderNav className="header__nav">
                        <S.HeaderBtnMainCenter
                            className="header__btn-main-enter btn-hov01"
                            id="btnMainEnter"
                        >
                            Вход в личный кабинет
                        </S.HeaderBtnMainCenter>
                    </S.HeaderNav>
                </S.Header>
                <S.Main className="main">
                    <S.MainSearch className="main__search search">
                        <S.SearchLogoLink
                            className="search__logo-link"
                            href="#"
                            target="_blank"
                        >
                            <S.SearchLogoImg
                                className="search__logo-img"
                                src="img/logo.png"
                                alt="logo"
                            />
                        </S.SearchLogoLink>
                        <S.SearchLogoMobLink
                            className="search__logo-mob-link"
                            href="#"
                            target="_blank"
                        >
                            <S.SearchLogoMobImg
                                className="search__logo-mob-img"
                                src="img/logo-mob.png"
                                alt="logo"
                            />
                        </S.SearchLogoMobLink>
                        <S.SearchForm className="search__form" action="#">
                            <S.SearchText
                                className="search__text"
                                type="search"
                                placeholder="Поиск по объявлениям"
                                name="search"
                            />
                            <S.SearchTextMob
                                className="search__text-mob"
                                type="search"
                                placeholder="Поиск"
                                name="search-mob"
                            />
                            <S.SearchBtn className="search__btn btn-hov02">
                                Найти
                            </S.SearchBtn>
                        </S.SearchForm>
                    </S.MainSearch>
                    <S.MainContainer className="main__container">
                        <S.MainH2 className="main__h2">Объявления</S.MainH2>

                        <S.MainContent className="main__content">
                            <S.ContentCards className="content__cards cards">
                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a href="#" target="_blank">
                                                <S.CardImageItem
                                                    src="#"
                                                    alt="picture"
                                                />
                                            </a>
                                        </S.CardImage>
                                        <S.CardContent className="card__content">
                                            <a href="" target="_blank">
                                                <S.CardTitle className="card__title">
                                                    Ракетка для большого тенниса
                                                    Triumph Pro ST
                                                </S.CardTitle>
                                            </a>
                                            <S.CardPrice className="card__price">
                                                2&nbsp;200&nbsp;₽
                                            </S.CardPrice>
                                            <S.CardPlace className="card__place">
                                                Санкт Петербург
                                            </S.CardPlace>
                                            <S.CardDate className="card__date">
                                                Сегодня в&nbsp;10:45
                                            </S.CardDate>
                                        </S.CardContent>
                                    </S.CardsCard>
                                </S.CardsItem>

                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a href="#" target="_blank">
                                                <img src="#" alt="picture" />
                                            </a>
                                        </S.CardImage>
                                        <S.CardContent className="card__content">
                                            <a href="" target="_blank">
                                                <S.CardTitle className="card__title">
                                                    Ракетка для большого тенниса
                                                    Triumph Pro ST
                                                </S.CardTitle>
                                            </a>
                                            <S.CardPrice className="card__price">
                                                2&nbsp;200&nbsp;₽
                                            </S.CardPrice>
                                            <S.CardPlace className="card__place">
                                                Санкт Петербург
                                            </S.CardPlace>
                                            <S.CardDate className="card__date">
                                                Сегодня в&nbsp;10:45
                                            </S.CardDate>
                                        </S.CardContent>
                                    </S.CardsCard>
                                </S.CardsItem>

                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a href="#" target="_blank">
                                                <img src="#" alt="picture" />
                                            </a>
                                        </S.CardImage>
                                        <S.CardContent className="card__content">
                                            <a href="" target="_blank">
                                                <S.CardTitle className="card__title">
                                                    Ракетка для большого тенниса
                                                    Triumph Pro ST
                                                </S.CardTitle>
                                            </a>
                                            <S.CardPrice className="card__price">
                                                2&nbsp;200&nbsp;₽
                                            </S.CardPrice>
                                            <S.CardPlace className="card__place">
                                                Санкт Петербург
                                            </S.CardPlace>
                                            <S.CardDate className="card__date">
                                                Сегодня в&nbsp;10:45
                                            </S.CardDate>
                                        </S.CardContent>
                                    </S.CardsCard>
                                </S.CardsItem>

                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a href="#" target="_blank">
                                                <img src="#" alt="picture" />
                                            </a>
                                        </S.CardImage>
                                        <S.CardContent className="card__content">
                                            <a href="" target="_blank">
                                                <S.CardTitle className="card__title">
                                                    Ракетка для большого тенниса
                                                    Triumph Pro ST
                                                </S.CardTitle>
                                            </a>
                                            <S.CardPrice className="card__price">
                                                2&nbsp;200&nbsp;₽
                                            </S.CardPrice>
                                            <S.CardPlace className="card__place">
                                                Санкт Петербург
                                            </S.CardPlace>
                                            <S.CardDate className="card__date">
                                                Сегодня в&nbsp;10:45
                                            </S.CardDate>
                                        </S.CardContent>
                                    </S.CardsCard>
                                </S.CardsItem>

                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a href="#" target="_blank">
                                                <img src="#" alt="picture" />
                                            </a>
                                        </S.CardImage>
                                        <S.CardContent className="card__content">
                                            <a href="" target="_blank">
                                                <S.CardTitle className="card__title">
                                                    Ракетка для большого тенниса
                                                    Triumph Pro ST
                                                </S.CardTitle>
                                            </a>
                                            <S.CardPrice className="card__price">
                                                2&nbsp;200&nbsp;₽
                                            </S.CardPrice>
                                            <S.CardPlace className="card__place">
                                                Санкт Петербург
                                            </S.CardPlace>
                                            <S.CardDate className="card__date">
                                                Сегодня в&nbsp;10:45
                                            </S.CardDate>
                                        </S.CardContent>
                                    </S.CardsCard>
                                </S.CardsItem>

                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a href="#" target="_blank">
                                                <img src="#" alt="picture" />
                                            </a>
                                        </S.CardImage>
                                        <S.CardContent className="card__content">
                                            <a href="" target="_blank">
                                                <S.CardTitle className="card__title">
                                                    Ракетка для большого тенниса
                                                    Triumph Pro ST
                                                </S.CardTitle>
                                            </a>
                                            <S.CardPrice className="card__price">
                                                2&nbsp;200&nbsp;₽
                                            </S.CardPrice>
                                            <S.CardPlace className="card__place">
                                                Санкт Петербург
                                            </S.CardPlace>
                                            <S.CardDate className="card__date">
                                                Сегодня в&nbsp;10:45
                                            </S.CardDate>
                                        </S.CardContent>
                                    </S.CardsCard>
                                </S.CardsItem>

                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a className="#" target="_blank">
                                                <img src="#" alt="picture" />
                                            </a>
                                        </S.CardImage>
                                        <S.CardContent className="card__content">
                                            <a href="" target="_blank">
                                                <S.CardTitle className="card__title">
                                                    Ракетка для большого тенниса
                                                    Triumph Pro ST
                                                </S.CardTitle>
                                            </a>
                                            <S.CardPrice className="card__price">
                                                2&nbsp;200&nbsp;₽
                                            </S.CardPrice>
                                            <S.CardPlace className="card__place">
                                                Санкт Петербург
                                            </S.CardPlace>
                                            <S.CardDate className="card__date">
                                                Сегодня в&nbsp;10:45
                                            </S.CardDate>
                                        </S.CardContent>
                                    </S.CardsCard>
                                </S.CardsItem>

                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a href="#" target="_blank">
                                                <img src="#" alt="picture" />
                                            </a>
                                        </S.CardImage>
                                        <S.CardContent className="card__content">
                                            <a href="" target="_blank">
                                                <S.CardTitle className="card__title">
                                                    Ракетка для большого тенниса
                                                    Triumph Pro ST
                                                </S.CardTitle>
                                            </a>
                                            <S.CardPrice className="card__price">
                                                2&nbsp;200&nbsp;₽
                                            </S.CardPrice>
                                            <S.CardPlace className="card__place">
                                                Санкт Петербург
                                            </S.CardPlace>
                                            <S.CardDate className="card__date">
                                                Сегодня в&nbsp;10:45
                                            </S.CardDate>
                                        </S.CardContent>
                                    </S.CardsCard>
                                </S.CardsItem>

                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a href="#" target="_blank">
                                                <img src="#" alt="picture" />
                                            </a>
                                        </S.CardImage>
                                        <S.CardContent className="card__content">
                                            <a href="" target="_blank">
                                                <S.CardTitle className="card__title">
                                                    Ракетка для большого тенниса
                                                    Triumph Pro ST
                                                </S.CardTitle>
                                            </a>
                                            <S.CardPrice className="card__price">
                                                2&nbsp;200&nbsp;₽
                                            </S.CardPrice>
                                            <S.CardPlace className="card__place">
                                                Санкт Петербург
                                            </S.CardPlace>
                                            <S.CardDate className="card__date">
                                                Сегодня в&nbsp;10:45
                                            </S.CardDate>
                                        </S.CardContent>
                                    </S.CardsCard>
                                </S.CardsItem>

                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a href="#" target="_blank">
                                                <img src="#" alt="picture" />
                                            </a>
                                        </S.CardImage>
                                        <S.CardContent className="card__content">
                                            <a href="" target="_blank">
                                                <S.CardTitle className="card__title">
                                                    Ракетка для большого тенниса
                                                    Triumph Pro ST
                                                </S.CardTitle>
                                            </a>
                                            <S.CardPrice className="card__price">
                                                2&nbsp;200&nbsp;₽
                                            </S.CardPrice>
                                            <S.CardPlace className="card__place">
                                                Санкт Петербург
                                            </S.CardPlace>
                                            <S.CardDate className="card__date">
                                                Сегодня в&nbsp;10:45
                                            </S.CardDate>
                                        </S.CardContent>
                                    </S.CardsCard>
                                </S.CardsItem>
                            </S.ContentCards>
                        </S.MainContent>
                    </S.MainContainer>
                </S.Main>

                <S.Footer className="footer">
                    <S.FooterContainer className="footer__container">
                        <S.FooterImg className="footer__img">
                            <a href="" target="_self">
                                <S.FooterImgItem
                                    src="img/icon_01.png"
                                    alt="home"
                                />
                            </a>
                        </S.FooterImg>
                        <S.FooterImg className="footer__img">
                            <a href="" target="_self">
                                <S.FooterImgItem
                                    src="img/icon_02.png"
                                    alt="home"
                                />
                            </a>
                        </S.FooterImg>
                        <S.FooterImg className="footer__img">
                            <a href="" target="_self">
                                <S.FooterImgItem
                                    src="img/icon_03.png"
                                    alt="home"
                                />
                            </a>
                        </S.FooterImg>
                    </S.FooterContainer>
                </S.Footer>
            </S.Container>
        </S.Wrapper>
    );
}

export default Main;
