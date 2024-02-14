import { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../UserContext/UserContext';
import Addnewat from '../PoPups/Addnewat/Addnewat';
import GlobalStyle from '../../App.CreateGlobalStyle';
import * as S from './Layout.styled';

function Layout() {
    const [modalNewAddIsOpen, setModalNewAddIsOpen] = useState(false);
    const { userData } = useContext(UserContext);

    const changingUserInformation = () => {
        localStorage.removeItem('user');
        window.location.pathname = '/login';
    };

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
                            {userData ? (
                                <>
                                    <S.HeaderBtnPutAd
                                        className="header__btn-putAd btn-hov01"
                                        onClick={() =>
                                            setModalNewAddIsOpen(true)
                                        }
                                    >
                                        Разместить объявление
                                    </S.HeaderBtnPutAd>
                                    <Addnewat
                                        isOpen={modalNewAddIsOpen}
                                        onClose={() =>
                                            setModalNewAddIsOpen(false)
                                        }
                                    />
                                    <S.HeaderBtnLkLink to={'/profile'}>
                                        <S.HeaderBtnLk className="header__btn-lk btn-hov01">
                                            Личный кабинет
                                        </S.HeaderBtnLk>
                                    </S.HeaderBtnLkLink>

                                    <S.HeaderBtnMainCenter
                                        className="header__btn-main-enter btn-hov01"
                                        onClick={() =>
                                            changingUserInformation()
                                        }
                                    >
                                        Выйти
                                    </S.HeaderBtnMainCenter>
                                </>
                            ) : (
                                <S.HeaderBtnMainCenter
                                    className="header__btn-main-enter btn-hov01"
                                    to={'/login'}
                                >
                                    Вход в личный кабинет
                                </S.HeaderBtnMainCenter>
                            )}
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
