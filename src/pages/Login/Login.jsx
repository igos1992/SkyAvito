import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGetTokenAndLoginMutation } from '../../redux/RequestsWithAds/serviceQuery';
import { setAuth } from '../../redux/RequestsWithAds/authSlice';
import { UserContext } from '../../UserContext/UserContext';
import * as S from './Login.styled';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getToken] = useGetTokenAndLoginMutation();
    const { changingUserData } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [offButton, setOffButton] = useState(false);
    const [error, setError] = useState(null);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = async () => {
        setOffButton(true);
        await getToken({
            email: email,
            password: password,
        })
            .unwrap()
            .then((token) => {
                console.log(token);
                dispatch(
                    setAuth({
                        access: token?.access_token,
                        refresh: token?.refresh_token,
                        user: JSON.parse(localStorage.getItem('user')),
                    }),
                );
                localStorage.setItem(
                    'access_token',
                    token?.access_token.toString(),
                );
                localStorage.setItem(
                    'refresh_token',
                    token?.refresh_token.toString(),
                );
                localStorage.setItem(
                    'user',
                    JSON.stringify(token?.access_token),
                ),
                    changingUserData(JSON.parse(localStorage.getItem('user')));
                navigate('/');
            })
            .catch((error) => {
                console.log(error?.data?.detail[0]?.msg);
                console.log(error);

                if (
                    error?.data?.detail[0]?.msg ===
                        'value is not a valid email address' ||
                    error?.message ===
                        'window.location.navigate is not a function'
                ) {
                    setError('Не правильно введен emeal или пароль');
                    return;
                }
                setError(error?.data?.detail[0]?.msg);
            })
            .finally(() => {
                setOffButton(false);
            });
    };

    return (
        <S.Wrapper className="wrapper">
            <S.ContainerEnter className="container-enter">
                <S.ModalBlock className="modal__block">
                    <S.ModalFormLogin
                        className="modal__form-login"
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
                            type="email"
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
                                <S.FillInTheFieldP>
                                    {errors.login.message || 'Error!'}
                                </S.FillInTheFieldP>
                            )}
                        </S.FillInTheField>
                        <S.ModalInput
                            className="modal__input password"
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
                                <S.FillInTheFieldP>
                                    {errors.password.message || 'Error!'}
                                </S.FillInTheFieldP>
                            )}
                        </S.FillInTheField>
                        {error && <S.Error>{error}</S.Error>}
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
