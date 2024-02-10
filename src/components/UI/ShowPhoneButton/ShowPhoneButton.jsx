// import { useState } from 'react';
import { useContext, useState } from 'react';
import * as S from './ShowPhoneButton.styled';
import Atclsettings from '../../PoPups/Atclsettings/Atclsettings';
import { UserContext } from '../../../UserContext/UserContext';
import { useParams } from 'react-router-dom';
import { useGetDeleteAdIdMutation } from '../../../redux/RequestsWithAds/serviceQuery';

function ShowPhoneButton({ sellerId, dataAds, isShowPhone, setIsShowPhone }) {
    const { userData } = useContext(UserContext);
    const { userId } = useParams();
    const { id } = useParams();
    const [deleteAdId] = useGetDeleteAdIdMutation(Number(id));
    const [modalEditAnAddIsOpen, setModalEditAnAddIsOpen] = useState(false);

    const deleteAd = async () => {
        await deleteAdId(Number(id)).then((res) => {
            console.log(res);
        })
        window.location.pathname = '/';
    }


    return (
        <>
            {location.pathname === `/sellerProfile/${userId}` ? (
                <S.ShowPhoneButton
                    className="article__btn btn-hov02"
                    onClick={setIsShowPhone}
                >
                    Показать&nbsp;телефон
                    {!isShowPhone ? (
                        <S.ShowPhoneButtonSpan className="article-span">
                            {sellerId?.phone?.slice(0, 7)} XXX XX XX
                        </S.ShowPhoneButtonSpan>
                    ) : (
                        <S.ShowPhoneButtonSpan className="article-span">
                            {sellerId?.phone}
                        </S.ShowPhoneButtonSpan>
                    )}
                </S.ShowPhoneButton>
            ) : (
                <>
                    {userData?.data.id === dataAds?.user.id ? (
                        <S.ArticleBtnBlock className="article__btn-block">
                            <S.ArticleBtnRedact
                                className="article__btn btn-redact btn-hov02"
                                onClick={() => setModalEditAnAddIsOpen(true)}
                            >
                                Редактировать
                            </S.ArticleBtnRedact>
                            <Atclsettings
                                isOpen={modalEditAnAddIsOpen}
                                onClose={() => setModalEditAnAddIsOpen(false)}
                                dataAds={dataAds}
                            />
                            <S.ArticleBtnRemove className="article__btn btn-remove btn-hov02"
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
                            Показать&nbsp;телефон
                            {!isShowPhone ? (
                                <S.ShowPhoneButtonSpan className="article-span">
                                    {dataAds?.user.phone?.slice(0, 7)} XXX XX XX
                                </S.ShowPhoneButtonSpan>
                            ) : (
                                <S.ShowPhoneButtonSpan className="article-span">
                                    {dataAds?.user.phone}
                                </S.ShowPhoneButtonSpan>
                            )}
                        </S.ShowPhoneButton>
                    )}
                </>
            )}
        </>
    );
}

export default ShowPhoneButton;
