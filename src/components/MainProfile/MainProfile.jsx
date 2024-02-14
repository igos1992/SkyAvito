import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
    useChangeTheRecordOfTheCurrentUserMutation,
    useUploadAnAvatarForTheUserMutation,
    useUpdateCurrentUserPasswordMutation,
} from '../../redux/RequestsWithAds/serviceQuery';
import { setAddingImagesAvatar } from '../../redux/RequestsWithAds/adsSlice';
import SettingsImg from './SettingsImg/SettingsImg';
import UpdateCurrentUserPasswordPoPup from '../PoPups/UpdateCurrentUserPasswordPoPup/UpdateCurrentUserPasswordPoPup';
import * as S from './MainProfile.styled';

function MainProfile({ currentUser }) {
    const dispatch = useDispatch();
    const filePicker = useRef(null);

    const [getChangingUserData] = useChangeTheRecordOfTheCurrentUserMutation();
    const [uploadAvatarForUser] = useUploadAnAvatarForTheUserMutation();
    const [updateCurrentUserPassword] = useUpdateCurrentUserPasswordMutation();
    const [selectedFile, setSelectedFile] = useState();
    const [modalNewAddIsOpen, setModalNewAddIsOpen] = useState(false);
    const [password_1, setPassword_1] = useState('');
    const [password_2, setPassword_2] = useState('');
    const [offButton, setOffButton] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setName(currentUser?.name || '');
        setSurname(currentUser?.surname || '');
        setCity(currentUser?.city || '');
        setPhone(currentUser?.phone || '');
    }, [currentUser]);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const updateUserPassword = async () => {
        await updateCurrentUserPassword({
            password_1: password_1,
            password_2: password_2,
        }).then((res) => {
            console.log(res);
        });
    };

    const handleAvatar = (event) => {
        const reader = new FileReader();
        if (!event.target.files[0]) {
            return;
        }
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
            dispatch(setAddingImagesAvatar(reader.result));
        };

        setSelectedFile(event.target.files?.[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            return;
        }
        const formData = new FormData();
        formData.append('file', selectedFile);
        await uploadAvatarForUser(formData).then((data) => {
            console.log(data);
        });
    };

    const handlePick = () => {
        filePicker.current.click();
    };

    const onSubmit = async () => {
        setOffButton(true);

        await getChangingUserData({
            name: name,
            surname: surname,
            city: city,
            phone: phone,
        });
        await handleUpload();
        setOffButton(false);

        if (password_1 && password_2) {
            return await updateUserPassword();
        } else {
            return;
        }
    };

    return (
        <S.MainProfile className="main__profile profile">
            <S.ProfileContent className="profile__content">
                <S.ProfileTitle className="profile__title title">
                    Настройки профиля
                </S.ProfileTitle>
                <S.SettingsForm
                    className="settings__form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <S.ProfileSettings className="profile__settings settings">
                        <S.SettingsLeft className="settings__left">
                            <SettingsImg />
                            <S.UploadFileInput
                                type="file"
                                id="upload-file__input_1"
                                ref={filePicker}
                                className="upload-file__input"
                                onChange={handleAvatar}
                                accept=".jpg, .jpeg, .png,"
                            />
                            <S.UploadFileButton
                                type="button"
                                className="upload-file__button"
                                onClick={handlePick}
                            >
                                Заменить аватарку
                            </S.UploadFileButton>
                        </S.SettingsLeft>
                        <S.SettingsRight className="settings__right">
                            <S.SettingsDiv className="settings__div">
                                <S.SettingsDivLabel htmlFor="settings-fname">
                                    Имя
                                </S.SettingsDivLabel>
                                <S.SettingsFName
                                    className="settings__f-name"
                                    id="settings-fname"
                                    name="fname"
                                    type="text"
                                    value={name}
                                    placeholder="Имя"
                                    {...register('name', {
                                        required: false,
                                        onChange: (event) => {
                                            setName(event.target.value);
                                        },
                                    })}
                                />
                            </S.SettingsDiv>

                            <S.SettingsDiv className="settings__div">
                                <S.SettingsDivLabel htmlFor="settings-lname">
                                    Фамилия
                                </S.SettingsDivLabel>
                                <S.SettingsLName
                                    className="settings__l-name"
                                    id="settings-lname"
                                    name="lname"
                                    type="text"
                                    value={surname}
                                    placeholder="Фамилия"
                                    {...register('surname', {
                                        required: false,
                                        onChange: (event) => {
                                            setSurname(event.target.value);
                                        },
                                    })}
                                />
                            </S.SettingsDiv>

                            <S.SettingsDiv className="settings__div">
                                <S.SettingsDivLabel htmlFor="settings-city">
                                    Город
                                </S.SettingsDivLabel>
                                <S.SettingsCity
                                    className="settings__city"
                                    id="settings-city"
                                    name="city"
                                    type="text"
                                    value={city}
                                    placeholder="Город"
                                    {...register('city', {
                                        required: false,
                                        onChange: (event) => {
                                            setCity(event.target.value);
                                        },
                                    })}
                                />
                            </S.SettingsDiv>

                            <S.SettingsDiv className="settings__div">
                                <S.SettingsDivLabel htmlFor="settings-phone">
                                    Телефон
                                </S.SettingsDivLabel>
                                <S.SettingsPhone
                                    className="settings__phone"
                                    id="settings-phone"
                                    name="phone"
                                    type="tel"
                                    value={phone}
                                    placeholder="+79161234567"
                                    {...register('phone', {
                                        required: false,
                                        onChange: (event) => {
                                            setPhone(event.target.value);
                                        },
                                        pattern: {
                                            value: /^[0-9+-]+$/,
                                            message:
                                                'Ведите номер телефона цифрами',
                                        },
                                    })}
                                />
                                <S.FillInTheField>
                                    {errors.phone && (
                                        <p>
                                            {errors.phone.message || 'Error!'}
                                        </p>
                                    )}
                                </S.FillInTheField>
                            </S.SettingsDiv>

                            <S.HeaderBtnPutAd
                                className="header__btn-putAd btn-hov01"
                                id="btputAd"
                                onClick={() => setModalNewAddIsOpen(true)}
                            >
                                Изменить пароль
                            </S.HeaderBtnPutAd>

                            <UpdateCurrentUserPasswordPoPup
                                isOpen={modalNewAddIsOpen}
                                onClose={() => setModalNewAddIsOpen(false)}
                                password_1={password_1}
                                setPassword_1={setPassword_1}
                                password_2={password_2}
                                setPassword_2={setPassword_2}
                            />

                            <S.SettingsBtn
                                className="settings__btn btn-hov02"
                                type="submit"
                                disabled={offButton}
                            >
                                Сохранить все изменения
                            </S.SettingsBtn>
                        </S.SettingsRight>
                    </S.ProfileSettings>
                </S.SettingsForm>
            </S.ProfileContent>
        </S.MainProfile>
    );
}

export default MainProfile;
