import * as S from './Login.styled';

function Login() {
    return (
        <S.Wrapper className="wrapper">
            <S.ContainerEnter className="container-enter">
                <S.ModalBlock className="modal__block">
                    <S.ModalFormLogin
                        className="modal__form-login"
                        id="formLogIn"
                        action="#"
                    >
                        <S.ModalLogo className="modal__logo">
                            <S.ModalLogoImg
                                src="../img/logo_modal.png"
                                alt="logo"
                            />
                        </S.ModalLogo>
                        <S.ModalInput
                            className="modal__input login"
                            type="text"
                            name="login"
                            id="formlogin"
                            placeholder="email"
                        />
                        <S.ModalInput
                            className="modal__input password"
                            type="password"
                            name="password"
                            id="formpassword"
                            placeholder="Пароль"
                        />
                        <S.ModalBtnEnter className="modal__btn-enter">
                            <S.ModalBtnEnterLink href="#">
                                Войти
                            </S.ModalBtnEnterLink>
                        </S.ModalBtnEnter>
                        <S.ModalBtnSignup className="modal__btn-signup">
                            <S.ModalBtnSignupLink href="#">
                                Зарегистрироваться
                            </S.ModalBtnSignupLink>
                        </S.ModalBtnSignup>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
}

export default Login;
