import * as S from './Signup.styled';

function Signup() {
    return (
        <S.Wrapper className="wrapper">
            <S.ContainerSignup className="container-signup">
                <S.ModalBlock className="modal__block">
                    <S.ModalFormLogin
                        className="modal__form-login"
                        id="formLogUp"
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
                            id="loginReg"
                            placeholder="email"
                        />
                        <S.ModalInput
                            className="modal__input password-first"
                            type="password"
                            name="password"
                            id="passwordFirst"
                            placeholder="Пароль"
                        />
                        <S.ModalInput
                            className="modal__input password-double"
                            type="password"
                            name="password"
                            id="passwordSecond"
                            placeholder="Повторите пароль"
                        />
                        <S.ModalInput
                            className="modal__input first-name"
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="Имя (необязательно)"
                        />
                        <S.ModalInput
                            className="modal__input first-last"
                            type="text"
                            name="first-last"
                            id="first-last"
                            placeholder="Фамилия (необязательно)"
                        />
                        <S.ModalInput
                            className="modal__input city"
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Город (необязательно)"
                        />
                        <S.ModalBtnSignupEnt
                            className="modal__btn-signup-ent"
                            id="SignUpEnter"
                        >
                            <S.ModalBtnSignupEntLink href="#">
                                Зарегистрироваться
                            </S.ModalBtnSignupEntLink>
                        </S.ModalBtnSignupEnt>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerSignup>
        </S.Wrapper>
    );
}

export default Signup;
