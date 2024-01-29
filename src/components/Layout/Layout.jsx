import { Outlet } from 'react-router-dom';
import GlobalStyle from '../../App.CreateGlobalStyle';
import * as S from './Layout.styled';

function Layout() {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
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
                            <S.HeaderBtnMainCenter
                                className="header__btn-main-enter btn-hov01"
                                id="btnMainEnter"
                            >
                                Вход в личный кабинет
                            </S.HeaderBtnMainCenter>
                        </S.HeaderNav>
                    </S.Header>

                    <Outlet />

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
        </>
    );
}

export default Layout;
