import { useForm } from 'react-hook-form';
import * as S from './UpdateCurrentUserPasswordPoPup.styled';

function UpdateCurrentUserPasswordPoPup({
    isOpen,
    onClose,
    password_1,
    setPassword_1,
    password_2,
    setPassword_2,
}) {
    const {
        register,
        formState: { reset },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = async () => {
        reset();
    };

    return (
        <>
            {isOpen && (
                <S.Wrapper className="wrapper">
                    <S.ContainerBg className="container-bg">
                        <S.ModalBlock className="modal__block">
                            <S.ModalContent
                                className="modal__content"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <S.ModalBtnClose
                                    className="modal__btn-close"
                                    onClick={() => onClose()}
                                >
                                    <S.ModalBtnCloseLine className="modal__btn-close-line" />
                                </S.ModalBtnClose>

                                <S.SettingsDiv className="settings__div">
                                    <S.SettingsDivLabel>
                                        Изменить пароль
                                    </S.SettingsDivLabel>
                                    <S.SettingsPhone
                                        className="settings__phone"
                                        name="password_1"
                                        type="current-password"
                                        value={password_1}
                                        placeholder="Введите старый пароль"
                                        {...register('password_1', {
                                            required: false,
                                            onChange: (event) => {
                                                if (onClose) {
                                                    setPassword_1('');
                                                }
                                                setPassword_1(
                                                    event.target.value,
                                                );
                                            },
                                        })}
                                    />
                                    <S.SettingsPhone
                                        className="settings__phone"
                                        name="password_2"
                                        type="new password"
                                        value={password_2}
                                        placeholder="Введите новый пароль"
                                        {...register('password_2', {
                                            required: false,
                                            onChange: (event) => {
                                                if (onClose) {
                                                    setPassword_2('');
                                                }
                                                setPassword_2(
                                                    event.target.value,
                                                );
                                            },
                                        })}
                                    />
                                </S.SettingsDiv>
                                <S.SaveChangesPassword type="submit">
                                    Сохранить
                                </S.SaveChangesPassword>
                            </S.ModalContent>
                        </S.ModalBlock>
                    </S.ContainerBg>
                </S.Wrapper>
            )}
        </>
    );
}

export default UpdateCurrentUserPasswordPoPup;
