import SettingsImg from '../MainProfile/SettingsImg/SettingsImg';
import * as S from './MainProfile.styled';
import SettingsChangePhoto from './SettingsChangePhoto/SettingsChangePhoto';

function MainProfile() {
    return (
        <S.MainProfile className="main__profile profile">
            <S.ProfileContent className="profile__content">
                <S.ProfileTitle className="profile__title title">
                    Настройки профиля
                </S.ProfileTitle>
                <S.ProfileSettings className="profile__settings settings">
                    <S.SettingsLeft className="settings__left">
                        <SettingsImg />
                        <SettingsChangePhoto />
                    </S.SettingsLeft>
                    <S.SettingsRight className="settings__right">
                        <S.SettingsForm className="settings__form" action="#">
                            <S.SettingsDiv className="settings__div">
                                <S.SettingsDivLabel htmlFor="settings-fname">
                                    Имя
                                </S.SettingsDivLabel>
                                <S.SettingsFName
                                    className="settings__f-name"
                                    id="settings-fname"
                                    name="fname"
                                    type="text"
                                    // value="Ан"
                                    placeholder=""
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
                                    // value="Городецкий"
                                    placeholder=""
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
                                    // value="Санкт-Петербург"
                                    placeholder=""
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
                                    // value="89161234567"
                                    placeholder="+79161234567"
                                />
                            </S.SettingsDiv>

                            <S.SettingsBtn
                                className="settings__btn btn-hov02"
                                id="settings-btn"
                            >
                                Сохранить
                            </S.SettingsBtn>
                        </S.SettingsForm>
                    </S.SettingsRight>
                </S.ProfileSettings>
            </S.ProfileContent>
        </S.MainProfile>
    );
}

export default MainProfile;
