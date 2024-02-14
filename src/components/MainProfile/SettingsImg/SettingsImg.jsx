import * as S from './SettingsImg.styled';
import { useGetUserAvatarQuery } from '../../../redux/RequestsWithAds/serviceQuery';
import { useSelector } from 'react-redux';
import { selectAddingImagesAvatar } from '../../../redux/RequestsWithAds/adsSlice';

function SettingsImg() {
    const { data: avatar } = useGetUserAvatarQuery();
    console.log(avatar);

    const imagesAvatar = useSelector(selectAddingImagesAvatar);
    console.log(imagesAvatar);

    return (
        <S.SettingsImg className="settings__img">
            {imagesAvatar ? (
                <S.SettingsImgItem src={imagesAvatar} alt="" />
            ) : (
                <>
                    {avatar && (
                        <>
                            {avatar?.avatar ? (
                                <S.SettingsImgItem
                                    src={`http://localhost:8090/${avatar?.avatar}`}
                                    alt=""
                                />
                            ) : (
                                <S.AvatarSpan>Нет фото</S.AvatarSpan>
                            )}
                        </>
                    )}
                </>
            )}
        </S.SettingsImg>
    );
}

export default SettingsImg;
