import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    useGetDeleteAdIdMutation,
    useGetUserQuery,
} from '../../../redux/RequestsWithAds/serviceQuery';
import Atclsettings from '../../PoPups/Atclsettings/Atclsettings';

import SkeletonArticleShowPhoneButton from '../Skeletons/SkeletonArticleShowPhoneButton';
import * as S from './ShowPhoneButton.styled';

function ShowPhoneButton({ dataAds, isShowPhone, setIsShowPhone }) {
    const { id } = useParams();
    const {userId} = useParams()
    console.log(userId);
    const [deleteAdId] = useGetDeleteAdIdMutation(Number(id));
    const [modalEditAnAddIsOpen, setModalEditAnAddIsOpen] = useState(false);
    const { data: currentUser, isLoading } = useGetUserQuery();

    const deleteAd = async () => {
        await deleteAdId(Number(id)).then((res) => {
            console.log(res);
        });
        window.location.pathname = '/';
    };

    console.log(isShowPhone);

    return (
        <>
            {!localStorage.getItem('user') ? (
                <S.ShowPhoneButton
                    className="article__btn btn-hov02"
                    onClick={setIsShowPhone}
                >
                    {!isShowPhone ? (
                        <>
                            <span>Показать&nbsp;телефон</span>
                            <S.ShowPhoneButtonSpan className="article-span">
                                {dataAds?.user?.phone?.slice(0, 7)} XXX XX XX
                            </S.ShowPhoneButtonSpan>
                        </>
                    ) : (
                        <>
                            {!dataAds?.user.phone ? (
                                <span>Номер телефона отсутствует</span>
                            ) : (
                                <S.ShowPhoneButtonSpan className="article-span">
                                    {dataAds?.user?.phone}
                                </S.ShowPhoneButtonSpan>
                            )}
                        </>
                    )}
                </S.ShowPhoneButton>
            ) : (
                <>
                    {isLoading ? (
                        <SkeletonArticleShowPhoneButton />
                    ) : (
                        <>
                            {currentUser?.id === dataAds?.user?.id ? (
                                <S.ArticleBtnBlock className="article__btn-block">
                                    <S.ArticleBtnRedact
                                        className="article__btn btn-redact btn-hov02"
                                        onClick={() =>
                                            setModalEditAnAddIsOpen(true)
                                        }
                                    >
                                        Редактировать
                                    </S.ArticleBtnRedact>
                                    <Atclsettings
                                        isOpen={modalEditAnAddIsOpen}
                                        onClose={() =>
                                            setModalEditAnAddIsOpen(false)
                                        }
                                        dataAds={dataAds}
                                    />
                                    <S.ArticleBtnRemove
                                        className="article__btn btn-remove btn-hov02"
                                        onClick={deleteAd}
                                    >
                                        Снять с публикации
                                    </S.ArticleBtnRemove>
                                </S.ArticleBtnBlock>
                            ) : (
                                <S.ShowPhoneButton
                                    className="article__btn btn-hov02"
                                    onClick={setIsShowPhone}
                                >
                                    {!isShowPhone ? (
                                        <>
                                            <span>Показать&nbsp;телефон</span>
                                            <S.ShowPhoneButtonSpan className="article-span">
                                                {dataAds?.user?.phone?.slice(
                                                    0,
                                                    7,
                                                )}{' '}
                                                XXX XX XX
                                            </S.ShowPhoneButtonSpan>
                                        </>
                                    ) : (
                                        <>
                                            {!dataAds?.user.phone ? (
                                                <span>
                                                    Номер телефона отсутствует
                                                </span>
                                            ) : (
                                                <S.ShowPhoneButtonSpan className="article-span">
                                                    {dataAds?.user?.phone}
                                                </S.ShowPhoneButtonSpan>
                                            )}
                                        </>
                                    )}
                                </S.ShowPhoneButton>
                            )}
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default ShowPhoneButton;
