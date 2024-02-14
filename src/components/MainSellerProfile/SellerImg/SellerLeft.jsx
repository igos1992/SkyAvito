import SkeletonSellerAvatar from '../../UI/Skeletons/SkeletonSellerAvatar';
import * as S from './SellerLeft.styled';

function SellerLeft({ sellerId, isLoadingAvatar }) {
    return (
        <>
            {isLoadingAvatar ? (
                <SkeletonSellerAvatar />
            ) : (
                <S.SellerLeft className="seller__left">
                    <S.SellerImg className="seller__img">
                        {sellerId?.avatar ? (
                            <S.SellerImgItem
                                src={`http://localhost:8090/${sellerId?.avatar}`}
                                alt=""
                            />
                        ) : (
                            <span>Нет фото</span>
                        )}
                    </S.SellerImg>
                </S.SellerLeft>
            )}
        </>
    );
}

export default SellerLeft;
