import * as S from './SellerProfile.styled';

function SellerProfile() {
    return (
        <S.Wrapper className="wrapper">
            <S.Container className="container">
                <S.Header className="header">
                    <S.HeaderNav className="header__nav">
                        <S.HeaderLogo className="header__logo logo-mob">
                            <S.LogoMobLink
                                className="logo-mob__link"
                                href=""
                                target="_blank"
                            >
                                <S.LogoMobImg
                                    className="logo-mob__img"
                                    src="img/logo-mob.png"
                                    alt="logo"
                                />
                            </S.LogoMobLink>
                        </S.HeaderLogo>
                        <S.HeaderBtnPutAd
                            className="header__btn-putAd btn-hov01"
                            id="btputAd"
                        >
                            Разместить объявление
                        </S.HeaderBtnPutAd>
                        <S.HeaderBtnLk
                            className="header__btn-lk btn-hov01"
                            id="btnlk"
                        >
                            Личный кабинет
                        </S.HeaderBtnLk>
                    </S.HeaderNav>
                </S.Header>

                <S.Main className="main">
                    <S.MainContainer className="main__container">
                        <S.MainCenterBlock className="main__center-block">
                            <S.MainMenu className="main__menu menu">
                                <S.MenuLogoLink
                                    className="menu__logo-link"
                                    href=""
                                    target="_blank"
                                >
                                    <S.MenuLogoImg
                                        className="menu__logo-img"
                                        src="img/logo.png"
                                        alt="logo"
                                    />
                                </S.MenuLogoLink>
                                <S.MenuForm className="menu__form" action="#">
                                    <S.MenuBtn
                                        className="menu__btn btn-hov02"
                                        id="btnGoBack"
                                    >
                                        Вернуться на&nbsp;главную
                                    </S.MenuBtn>
                                </S.MenuForm>
                            </S.MainMenu>

                            <S.MainH2 className="main__h2">
                                Профиль продавца
                            </S.MainH2>

                            <S.MainProfileSell className="main__profile-sell profile-sell">
                                <S.ProfileSellContent className="profile-sell__content">
                                    <S.ProfileSellSeller className="profile-sell__seller seller">
                                        <S.SellerLeft className="seller__left">
                                            <S.SellerImg className="seller__img">
                                                <a href="" target="_self">
                                                    <S.SellerImgItem
                                                        src="#"
                                                        alt=""
                                                    />
                                                </a>
                                            </S.SellerImg>
                                        </S.SellerLeft>
                                        <S.SellerRight className="seller__right">
                                            <S.SellerTitle className="seller__title">
                                                Кирилл Матвеев
                                            </S.SellerTitle>
                                            <S.SellerCity className="seller__city">
                                                Санкт-Петербург
                                            </S.SellerCity>
                                            <S.SellerInfo className="seller__info">
                                                Продает товары с августа 2021
                                            </S.SellerInfo>

                                            <S.SellerImgMobBlock className="seller__img-mob-block">
                                                <S.SellerImgMob className="seller__img-mob">
                                                    <a href="" target="_self">
                                                        <S.SellerImgMobItem
                                                            src="#"
                                                            alt=""
                                                        />
                                                    </a>
                                                </S.SellerImgMob>
                                            </S.SellerImgMobBlock>

                                            <S.SellerBtn className="seller__btn btn-hov02">
                                                Показать&nbsp;телефон
                                                <S.SellerBtnSpan>
                                                    8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                                                </S.SellerBtnSpan>
                                            </S.SellerBtn>
                                        </S.SellerRight>
                                    </S.ProfileSellSeller>
                                </S.ProfileSellContent>
                            </S.MainProfileSell>

                            <S.MainTitle className="main__title ">
                                Товары продавца
                            </S.MainTitle>
                        </S.MainCenterBlock>
                        <S.MainContent className="main__content">
                            <S.ContentCards className="content__cards cards">
                                <S.CardsItem className="cards__item">
                                    <S.CardsCard className="cards__card card">
                                        <S.CardImage className="card__image">
                                            <a href="" target="_blank">
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
                                            <a href="" target="_blank">
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
                                            <a href="" target="_blank">
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
                                            <a href="" target="_blank">
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
                                            <a href="" target="_blank">
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
                                            <a href="" target="_blank">
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

export default SellerProfile;
