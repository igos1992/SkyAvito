import { useState } from 'react';
import * as S from './Login.styled';
import { useForm } from 'react-hook-form';
import {
    useGetTokenAndLoginMutation,
    useGetUserMutation,
} from '../../redux/RequestsWithAds/serviceQuery';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/RequestsWithAds/authSlice';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../redux/RequestsWithAds/adsSlice';

function Login() {
    const [getToken, { isError }] = useGetTokenAndLoginMutation();
    const [getTokenAndLogin] = useGetUserMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [offButton, setOffButton] = useState(false);
    // const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(isError);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const ChallengeGetTokenAndLogin = async () => {
        await getTokenAndLogin().then((res) => {
            console.log(res);
            dispatch(
                setCurrentUser(
                    localStorage.setItem('user', JSON.stringify(res)),
                ),
            );

            console.log(localStorage.getItem('user'));
        });
    };

    const onSubmit = async () => {
        setOffButton(true);
        await getToken({
            email: email,
            password: password,
        })
            .unwrap()
            .then((token) => {
                // console.log(token);
                dispatch(
                    setAuth({
                        access: token?.access_token,
                        refresh: token?.refresh_token,
                        user: JSON.parse(localStorage.getItem('user')),
                    }),
                );
            });
        await ChallengeGetTokenAndLogin();
        navigate('/');
    };

    console.log(localStorage.getItem('user'));

    return (
        <S.Wrapper className="wrapper">
            <S.ContainerEnter className="container-enter">
                <S.ModalBlock className="modal__block">
                    <S.ModalFormLogin
                        className="modal__form-login"
                        id="formLogIn"
                        action="#"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <S.ModalLogo className="modal__logo">
                            <S.ModalLogoImg
                                src="../img/logo_modal.png"
                                alt="logo"
                            />
                        </S.ModalLogo>
                        <S.ModalInput
                            className="modal__input login"
                            // type="text"
                            // name="login"
                            // id="formlogin"
                            // placeholder="email"
                            type="text"
                            placeholder="Почта"
                            value={email}
                            {...register('login', {
                                required: '* Поле обязательно к заполнению',
                                onChange: (event) => {
                                    setEmail(event.target.value);
                                },
                            })}
                        />
                        <S.FillInTheField>
                            {errors.login && (
                                <p>{errors.login.message || 'Error!'}</p>
                            )}
                        </S.FillInTheField>
                        <S.ModalInput
                            className="modal__input password"
                            // type="password"
                            // name="password"
                            // id="formpassword"
                            // placeholder="Пароль"
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            {...register('password', {
                                required: '* Поле обязательно к заполнению',
                                onChange: (event) => {
                                    setPassword(event.target.value);
                                },
                            })}
                        />
                        <S.FillInTheField>
                            {errors.password && (
                                <p>{errors.password.message || 'Error!'}</p>
                            )}
                        </S.FillInTheField>
                        {/* {error && <S.Error>{error}</S.Error>} */}
                        <S.ModalBtnEnter
                            className="modal__btn-enter"
                            type="submit"
                            disabled={offButton}
                        >
                            Войти
                        </S.ModalBtnEnter>
                        <S.ModalBtnSignup className="modal__btn-signup">
                            <S.ModalBtnSignupLink to={'/signup'}>
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
