import * as S from './Profile.styled';

function Profile() {
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
                                Здравствуйте, Антон!
                            </S.MainH2>

                            <S.MainProfile className="main__profile profile">
                                <S.ProfileContent className="profile__content">
                                    <S.ProfileTitle className="profile__title title">
                                        Настройки профиля
                                    </S.ProfileTitle>
                                    <S.ProfileSettings className="profile__settings settings">
                                        <S.SettingsLeft className="settings__left">
                                            <S.SettingsImg className="settings__img">
                                                <a href="" target="_self">
                                                    <S.SettingsImgItem
                                                        src="#"
                                                        alt=""
                                                    />
                                                </a>
                                            </S.SettingsImg>
                                            <S.SettingsChangePhoto
                                                className="settings__change-photo"
                                                href=""
                                                target="_self"
                                            >
                                                Заменить
                                            </S.SettingsChangePhoto>
                                        </S.SettingsLeft>
                                        <S.SettingsRight className="settings__right">
                                            <S.SettingsForm
                                                className="settings__form"
                                                action="#"
                                            >
                                                <S.SettingsDiv className="settings__div">
                                                    <S.SettingsDivLabel htmlFor="settings-fname">
                                                        Имя
                                                    </S.SettingsDivLabel>
                                                    <S.SettingsFName
                                                        className="settings__f-name"
                                                        id="settings-fname"
                                                        name="fname"
                                                        type="text"
                                                        // value="Ан"
                                                        placeholder=""
                                                    />
                                                </S.SettingsDiv>

                                                <S.SettingsDiv className="settings__div">
                                                    <S.SettingsDivLabel htmlFor="settings-lname">
                                                        Фамилия
                                                    </S.SettingsDivLabel>
                                                    <S.SettingsLName
                                                        className="settings__l-name"
                                                        id="settings-lname"
                                                        name="lname"
                                                        type="text"
                                                        // value="Городецкий"
                                                        placeholder=""
                                                    />
                                                </S.SettingsDiv>

                                                <S.SettingsDiv className="settings__div">
                                                    <S.SettingsDivLabel htmlFor="settings-city">
                                                        Город
                                                    </S.SettingsDivLabel>
                                                    <S.SettingsCity
                                                        className="settings__city"
                                                        id="settings-city"
                                                        name="city"
                                                        type="text"
                                                        // value="Санкт-Петербург"
                                                        placeholder=""
                                                    />
                                                </S.SettingsDiv>

                                                <S.SettingsDiv className="settings__div">
                                                    <S.SettingsDivLabel htmlFor="settings-phone">
                                                        Телефон
                                                    </S.SettingsDivLabel>
                                                    <S.SettingsPhone
                                                        className="settings__phone"
                                                        id="settings-phone"
                                                        name="phone"
                                                        type="tel"
                                                        // value="89161234567"
                                                        placeholder="+79161234567"
                                                    />
                                                </S.SettingsDiv>

                                                <S.SettingsBtn
                                                    className="settings__btn btn-hov02"
                                                    id="settings-btn"
                                                >
                                                    Сохранить
                                                </S.SettingsBtn>
                                            </S.SettingsForm>
                                        </S.SettingsRight>
                                    </S.ProfileSettings>
                                </S.ProfileContent>
                            </S.MainProfile>

                            <S.MainTitle className="main__title title">
                                Мои товары
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

export default Profile;
