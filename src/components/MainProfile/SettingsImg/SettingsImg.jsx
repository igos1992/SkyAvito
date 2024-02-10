import * as S from './SettingsImg.styled';
import { useGetUserAvatarQuery } from '../../../redux/RequestsWithAds/serviceQuery';

function SettingsImg() {
    const { data: avatar } = useGetUserAvatarQuery();
    console.log(avatar);

    return (
        <S.SettingsImg className="settings__img">
            {avatar && (
                <S.SettingsImgItem
                    src={`http://localhost:8090/${avatar?.avatar}`}
                    alt=""
                />
            )}
        </S.SettingsImg>
    );
}

export default SettingsImg;
