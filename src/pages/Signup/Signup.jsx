import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
    useGetTokenAndLoginMutation,
    useGetUserSignUpMutation,
} from '../../redux/RequestsWithAds/serviceQuery';
import { setAuth } from '../../redux/RequestsWithAds/authSlice';
import { UserContext } from '../../UserContext/UserContext';
import * as S from './Signup.styled';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userSignUp] = useGetUserSignUpMutation();
    const [getTokenAndLogin] = useGetTokenAndLoginMutation();

    const { changingUserData } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [city, setCity] = useState('');
    const [offButton, setOffButton] = useState(false);
    const [error, setError] = useState(null);

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
            })
                .unwrap()
                .then((response) => {
                    localStorage.setItem('user', JSON.stringify(response));
                    changingUserData(JSON.parse(localStorage.getItem('user')));
                    navigate('/');
                })
                .catch((err) => {
                    console.log(err);
                    if (err?.data?.message === 'Database Error') {
                        setError('Такой пользователь уже существует');
                        return;
                    }
                    setError(err?.data?.message);
                })
                .finally(() => {
                    setOffButton(false);
                });

            responseToken();
        }
    };

    return (
        <S.Wrapper className="wrapper">
            <S.ContainerSignup className="container-signup">
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
                            className="modal__input password-first"
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
                        <S.ModalInput
                            className="modal__input password-double"
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
                                <S.FillInTheFieldP>
                                    {errors.repeatPassword.message || 'Error!'}
                                </S.FillInTheFieldP>
                            )}
                        </S.FillInTheField>
                        <S.ModalInput
                            className="modal__input first-name"
                            type="text"
                            placeholder="Имя (необязательно)"
                            value={name}
                            {...register('name', {
                                required: false,
                                onChange: (event) => {
                                    setName(event.target.value);
                                },
                            })}
                        />
                        <S.FillInTheField>
                            {errors.name && (
                                <S.FillInTheFieldP>
                                    {errors.name.message || 'Error!'}
                                </S.FillInTheFieldP>
                            )}
                        </S.FillInTheField>

                        <S.ModalInput
                            className="modal__input first-last"
                            type="text"
                            placeholder="Фамилия (необязательно)"
                            value={surname}
                            {...register('surname', {
                                required: false,
                                onChange: (event) => {
                                    setSurname(event.target.value);
                                },
                            })}
                        />
                        <S.FillInTheField>
                            {errors.surname && (
                                <S.FillInTheFieldP>
                                    {errors.surname.message || 'Error!'}
                                </S.FillInTheFieldP>
                            )}
                        </S.FillInTheField>
                        <S.ModalInput
                            className="modal__input city"
                            type="text"
                            placeholder="Город (необязательно)"
                            value={city}
                            {...register('city', {
                                required: false,
                                onChange: (event) => {
                                    setCity(event.target.value);
                                },
                            })}
                        />
                        <S.FillInTheField>
                            {errors.city && (
                                <S.FillInTheFieldP>
                                    {errors.city.message || 'Error!'}
                                </S.FillInTheFieldP>
                            )}
                        </S.FillInTheField>
                        {error && <S.Error>{error}</S.Error>}
                        <S.ModalBtnSignupEnt
                            className="modal__btn-signup-ent"
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
