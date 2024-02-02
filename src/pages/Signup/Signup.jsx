import { useState } from 'react';
import * as S from './Signup.styled';
import { useForm } from 'react-hook-form';
import {
    useGetTokenAndLoginMutation,
    useGetUserSignUpMutation,
} from '../../redux/RequestsWithAds/serviceQuery';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/RequestsWithAds/authSlice';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [userSignUp, { isError }] = useGetUserSignUpMutation();
    const [getTokenAndLogin] = useGetTokenAndLoginMutation();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [city, setCity] = useState('');
    const [offButton, setOffButton] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(isError);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const responseToken = async () => {
        await getTokenAndLogin({ email, password })
            .unwrap()
            .then((token) => {
                // console.log(token.access_token);
                dispatch(
                    setAuth({
                        access: token.access_token,
                        refresh: token.refresh_token,
                        user: JSON.parse(localStorage.getItem('user')),
                    }),
                );
            })
            .catch((error) => {
                return error;
            })
            .finally(() => {
                setOffButton(false);
            });
    };

    const onSubmit = async () => {
        setOffButton(true);
        if (password !== repeatPassword) {
            setError('Пароли не совпадают');
            setOffButton(false);
        } else {
            await userSignUp({
                email: email,
                password: password,
                repeatPassword: repeatPassword,
                name: name,
                surname: surname,
                city: city,
            }).then((response) => {
                console.log(response);
                localStorage.setItem('user', JSON.stringify(response));
                console.log(localStorage.getItem('user'));
            });
            // .unwrap()

            navigate('/');
            responseToken();
        }
    };

    return (
        <S.Wrapper className="wrapper">
            <S.ContainerSignup className="container-signup">
                <S.ModalBlock className="modal__block">
                    <S.ModalFormLogin
                        className="modal__form-login"
                        id="formLogUp"
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
                            // id="loginReg"
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
                            className="modal__input password-first"
                            // type="password"
                            // name="password"
                            // id="passwordFirst"
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
                        <S.ModalInput
                            className="modal__input password-double"
                            // type="password"
                            // name="password"
                            // id="passwordSecond"
                            // placeholder="Повторите пароль"
                            type="password"
                            value={repeatPassword}
                            placeholder="Повторите пароль"
                            {...register('repeatPassword', {
                                required: '* Поле обязательно к заполнению',
                                onChange: (event) => {
                                    setRepeatPassword(event.target.value);
                                },
                            })}
                        />

                        <S.FillInTheField>
                            {errors.repeatPassword && (
                                <p>
                                    {errors.repeatPassword.message || 'Error!'}
                                </p>
                            )}
                        </S.FillInTheField>
                        <S.ModalInput
                            className="modal__input first-name"
                            // type="text"
                            // name="first-name"
                            // id="first-name"
                            // placeholder="Имя (необязательно)"
                            type="text"
                            placeholder="Имя (необязательно)"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />

                        <S.ModalInput
                            className="modal__input first-last"
                            // type="text"
                            // name="first-last"
                            // id="first-last"
                            // placeholder="Фамилия (необязательно)"
                            type="text"
                            placeholder="Фамилия (необязательно)"
                            value={surname}
                            onChange={(event) => {
                                setSurname(event.target.value);
                            }}
                        />
                        <S.ModalInput
                            className="modal__input city"
                            // type="text"
                            // name="city"
                            // id="city"
                            // placeholder="Город (необязательно)"
                            type="text"
                            placeholder="Город (необязательно)"
                            value={city}
                            onChange={(event) => {
                                setCity(event.target.value);
                            }}
                        />
                        {error && <S.Error>{error}</S.Error>}
                        <S.ModalBtnSignupEnt
                            className="modal__btn-signup-ent"
                            // id="SignUpEnter"
                            type="submit"
                            disabled={offButton}
                        >
                            Зарегистрироваться
                        </S.ModalBtnSignupEnt>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerSignup>
        </S.Wrapper>
    );
}

export default Signup;
