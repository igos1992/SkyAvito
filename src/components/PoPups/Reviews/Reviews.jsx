import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGetCreateCommentAdMutation } from '../../../redux/RequestsWithAds/serviceQuery';
import ModalReviews from './ModalReviews/ModalReviews';
import * as S from './Reviews.styled';

function Reviews({ isOpen, onClose }) {
    const { id } = useParams();
    const [createCommentAd] = useGetCreateCommentAdMutation(Number(id));
    const [loginButton, setLoginButton] = useState(false);

    useEffect(() => {
        setLoginButton(localStorage.getItem('user'));
    }, [loginButton]);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = async ({ text }) => {
        await createCommentAd({ id, text: text })
            .unwrap()
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error.message);
            });
        reset();
    };

    return (
        <>
            {isOpen && (
                <S.Wrapper className="wrapper">
                    <S.ContainerBg className="container-bg">
                        <S.ModalBlock className="modal__block">
                            <S.ModalContent className="modal__content">
                                <S.ModalTitle className="modal__title">
                                    Отзывы о товаре
                                </S.ModalTitle>

                                <S.ModalBtnClose
                                    className="modal__btn-close"
                                    onClick={() => onClose()}
                                >
                                    <S.ModalBtnCloseLine className="modal__btn-close-line" />
                                </S.ModalBtnClose>

                                <S.ModalScroll className="modal__scroll">
                                    <S.ModalFormNewArt
                                        className="modal__form-newArt form-newArt"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <S.FormNewArtBlock className="form-newArt__block">
                                            <S.FormNewArtBlockLabel>
                                                Добавить отзыв
                                            </S.FormNewArtBlockLabel>
                                            <S.FormNewArtArea
                                                className="form-newArt__area"
                                                name="text"
                                                placeholder="Введите описание"
                                                {...(loginButton
                                                    ? {
                                                          ...register('text', {
                                                              required:
                                                                  '* Пожалуйста, напишиnе комментарий',
                                                          }),
                                                      }
                                                    : {
                                                          ...register('text', {
                                                              required: false,
                                                          }),
                                                      })}
                                            />
                                            <S.FillInTheField>
                                                {errors.text && (
                                                    <S.FillInTheFieldP>
                                                        {errors.text.message ||
                                                            'Error!'}
                                                    </S.FillInTheFieldP>
                                                )}
                                            </S.FillInTheField>
                                        </S.FormNewArtBlock>
                                        {loginButton ? (
                                            <S.FormNewArtBtnPub
                                                className="form-newArt__btn-pub btn-hov02"
                                                type="submit"
                                                disabled={!isValid}
                                            >
                                                Опубликовать
                                            </S.FormNewArtBtnPub>
                                        ) : (
                                            <>
                                                <S.FillInTheFieldPNoComments>
                                                    Чтобы оставить отзыв,
                                                    необходима авторизация
                                                </S.FillInTheFieldPNoComments>

                                                <S.FormNewArtBtnPubInput
                                                    className="form-newArt__btn-pub btn-hov02"
                                                    placeholder="Опубликовать"
                                                    disabled
                                                />
                                            </>
                                        )}
                                    </S.ModalFormNewArt>

                                    <ModalReviews />
                                </S.ModalScroll>
                            </S.ModalContent>
                        </S.ModalBlock>
                    </S.ContainerBg>
                </S.Wrapper>
            )}
        </>
    );
}

export default Reviews;
