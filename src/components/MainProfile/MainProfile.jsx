import { useContext, useRef, useState } from 'react';
import { UserContext } from '../../UserContext/UserContext';
// import SettingsImg from '../MainProfile/SettingsImg/SettingsImg';
import * as S from './MainProfile.styled';
// import SettingsChangePhoto from './SettingsChangePhoto/SettingsChangePhoto';
import {
    useChangeTheRecordOfTheCurrentUserMutation,
    useUploadAnAvatarForTheUserMutation,
} from '../../redux/RequestsWithAds/serviceQuery';
import { useForm } from 'react-hook-form';
import SettingsImg from './SettingsImg/SettingsImg';
// import { useDispatch } from 'react-redux';
// import { setCurrentUser } from '../../redux/RequestsWithAds/adsSlice';

function MainProfile() {
    const { userData } = useContext(UserContext);
    const { changingUserData } = useContext(UserContext);
    // const dispatch = useDispatch();
    // console.log(userData);

    const [getChangingUserData] = useChangeTheRecordOfTheCurrentUserMutation();
    const [uploadAvatarForUser] = useUploadAnAvatarForTheUserMutation();
    const filePicker = useRef(null);
    const [selectedFile, setSelectedFile] = useState();
    const [upload, setUpload] = useState();

    const {
        register,
        // formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    // console.log(upload);

    // console.log(selectedFile);

    const handleAvatar = (event) => {
        console.log(event.target.files);
        setSelectedFile(event.target.files?.[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            // console.log('Файл не загружен');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        await uploadAvatarForUser(formData).then((data) => {
            // console.log(data);
            setUpload(data);
        });
    };

    const handlePick = () => {
        filePicker.current.click();
    };

    const onSubmit = async ({ name, surname, phone, city }) => {
        await getChangingUserData({
            name: name,
            surname: surname,
            city: city,
            phone: phone,
        })
            // .unwrap()
            .then((res) => {
                // console.log(res);

                localStorage.setItem('user', JSON.stringify(res));
                changingUserData(JSON.parse(localStorage.getItem('user')));
            });
        await handleUpload();
    };

    // console.log(JSON.parse(localStorage.getItem('user')));

    return (
        <S.MainProfile className="main__profile profile">
            <S.ProfileContent className="profile__content">
                <S.ProfileTitle className="profile__title title">
                    Настройки профиля
                </S.ProfileTitle>
                <S.SettingsForm
                    className="settings__form"
                    // action="#"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <S.ProfileSettings className="profile__settings settings">
                        <S.SettingsLeft className="settings__left">
                            {/* <SettingsImg /> */}
                            {/* <SettingsChangePhoto /> */}

                            <SettingsImg upload={upload} />
                            <S.UploadFileInput
                                type="file"
                                id="upload-file__input_1"
                                ref={filePicker}
                                className="upload-file__input"
                                onChange={handleAvatar}
                                accept=".jpg, .jpeg, .png,"
                            />

                            <S.UploadFileButton
                                type="submit"
                                className="upload-file__button"
                                onClick={handlePick}
                            >
                                Заменить фото
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
                                    defaultValue={userData?.data?.name}
                                    placeholder=""
                                    {...register('name', {
                                        required: false,
                                        onChange: (event) => {
                                            event.target.defaultValue;
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
                                    defaultValue={userData?.data?.surname}
                                    placeholder=""
                                    {...register('surname', {
                                        required: false,
                                        onChange: (event) => {
                                            event.target.defaultValue;
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
                                    defaultValue={userData?.data?.city}
                                    placeholder=""
                                    {...register('city', {
                                        required: false,
                                        onChange: (event) => {
                                            event.target.defaultValue;
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
                                    defaultValue={userData?.data?.phone}
                                    placeholder="+79161234567"
                                    {...register('phone', {
                                        required: false,
                                        onChange: (event) => {
                                            event.target.defaultValue;
                                        },
                                    })}
                                />
                            </S.SettingsDiv>

                            <S.SettingsBtn
                                className="settings__btn btn-hov02"
                                type="submit"
                            >
                                Сохранить
                            </S.SettingsBtn>
                        </S.SettingsRight>
                    </S.ProfileSettings>
                </S.SettingsForm>
            </S.ProfileContent>
        </S.MainProfile>
    );
}

export default MainProfile;
