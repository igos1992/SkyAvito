import * as S from './Article.styled';

function Article() {
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
                            <S.MenuLink className="menu__form" to="/">
                                <S.MenuBtnSerch
                                    className="menu__btn-serch btn-hov02"
                                    id="btnGoBack"
                                >
                                    Вернуться на главную
                                </S.MenuBtnSerch>
                            </S.MenuLink>
                        </S.MainMenu>
                    </S.MainContainer>

                    <S.MainArtic className="main__artic artic">
                        <S.ArticContent className="artic__content article">
                            <S.ArticleLeft className="article__left">
                                <S.ArticleFillImg className="article__fill-img">
                                    <S.ArticleImgItem className="article__img-item">
                                        <S.ArticleImg
                                            className="article__img"
                                            src=""
                                            alt=""
                                        />
                                    </S.ArticleImgItem>
                                    <S.ArticleImgBar className="article__img-bar">
                                        <S.ArticleImgBarDiv className="article__img-bar-div">
                                            <S.ArticleImg src="" alt="" />
                                        </S.ArticleImgBarDiv>
                                        <S.ArticleImgBarDiv className="article__img-bar-div">
                                            <S.ArticleImg src="" alt="" />
                                        </S.ArticleImgBarDiv>
                                        <S.ArticleImgBarDiv className="article__img-bar-div">
                                            <S.ArticleImg src="" alt="" />
                                        </S.ArticleImgBarDiv>
                                        <S.ArticleImgBarDiv className="article__img-bar-div">
                                            <S.ArticleImg src="" alt="" />
                                        </S.ArticleImgBarDiv>
                                        <S.ArticleImgBarDiv className="article__img-bar-div">
                                            <S.ArticleImg src="" alt="" />
                                        </S.ArticleImgBarDiv>
                                        <S.ArticleImgBarDiv className="article__img-bar-div">
                                            <S.ArticleImg src="" alt="" />
                                        </S.ArticleImgBarDiv>
                                    </S.ArticleImgBar>
                                    <S.ArticleImgBarMob className="article__img-bar-mob img-bar-mob">
                                        <S.ImgBarMobCircle className="img-bar-mob__circle circle-active"></S.ImgBarMobCircle>
                                        <S.ImgBarMobCircle className="img-bar-mob__circle"></S.ImgBarMobCircle>
                                        <S.ImgBarMobCircle className="img-bar-mob__circle"></S.ImgBarMobCircle>
                                        <S.ImgBarMobCircle className="img-bar-mob__circle"></S.ImgBarMobCircle>
                                        <S.ImgBarMobCircle className="img-bar-mob__circle"></S.ImgBarMobCircle>
                                    </S.ArticleImgBarMob>
                                </S.ArticleFillImg>
                            </S.ArticleLeft>
                            <S.ArticleRight className="article__right">
                                <S.ArticleBlock className="article__block">
                                    <S.ArticleTitle className="article__title title">
                                        Ракетка для большого тенниса Triumph Pro
                                        STС Б/У
                                    </S.ArticleTitle>
                                    <S.ArticleInfo className="article__info">
                                        <S.ArticleDate className="article__date">
                                            Сегодня в 10:45
                                        </S.ArticleDate>
                                        <S.ArticleCity className="article__city">
                                            Санкт-Петербург
                                        </S.ArticleCity>
                                        <S.ArticleLink
                                            className="article__link"
                                            href=""
                                            target="_blank"
                                            rel=""
                                        >
                                            23 отзыва
                                        </S.ArticleLink>
                                    </S.ArticleInfo>
                                    <S.ArticlePrice className="article__price">
                                        2 200 ₽
                                    </S.ArticlePrice>
                                    <S.ArticleBtn className="article__btn btn-hov02">
                                        Показать&nbsp;телефон
                                        <S.ArticleSpan className="article-span">
                                            8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                                        </S.ArticleSpan>
                                    </S.ArticleBtn>
                                    <S.ArticleAuthor className="article__author author">
                                        <S.AuthorImgItem className="author__img-item">
                                            <S.AuthorImg
                                                className="author__img"
                                                src=""
                                                alt=""
                                            />
                                        </S.AuthorImgItem>
                                        <S.AuthorCont className="author__cont">
                                            <S.AuthorName className="author__name">
                                                Кирилл
                                            </S.AuthorName>
                                            <S.AuthorAbout className="author__about">
                                                Продает товары с августа 2021
                                            </S.AuthorAbout>
                                        </S.AuthorCont>
                                    </S.ArticleAuthor>
                                </S.ArticleBlock>
                            </S.ArticleRight>
                        </S.ArticContent>
                    </S.MainArtic>

                    <S.MainContainer className="main__container">
                        <S.MainTitle className="main__title title">
                            Описание товара
                        </S.MainTitle>
                        <S.MainContent className="main__content">
                            <S.MainText className="main__text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </S.MainText>
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

export default Article;
