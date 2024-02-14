import { useSelector } from 'react-redux';
import { useGetUserAvatarQuery } from '../../../redux/RequestsWithAds/serviceQuery';
import { selectAddingImagesAvatar } from '../../../redux/selectedFile/selectedFile';
import * as S from './SettingsImg.styled';

function SettingsImg() {
    const { data: avatar } = useGetUserAvatarQuery();
    const imagesAvatar = useSelector(selectAddingImagesAvatar);

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
