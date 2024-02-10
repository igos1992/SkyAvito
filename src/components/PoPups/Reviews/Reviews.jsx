// import { useState } from 'react';
import ModalReviews from './ModalReviews/ModalReviews';
import * as S from './Reviews.styled';
import { useForm } from 'react-hook-form';
import { useGetCreateCommentAdMutation } from '../../../redux/RequestsWithAds/serviceQuery';
import { useParams } from 'react-router-dom';

function Reviews({ isOpen, onClose }) {
    const { id } = useParams();
    console.log(id);
    // const [text, setText] = useState('');
    // console.log(text);
    const [createCommentAd] = useGetCreateCommentAdMutation(Number(id));

    const {
        register,
        formState: { errors },
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
                                        id="formNewArt"
                                        // action="#"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <S.FormNewArtBlock className="form-newArt__block">
                                            <S.FormNewArtBlockLabel htmlFor="formArea">
                                                Добавить отзыв
                                            </S.FormNewArtBlockLabel>
                                            <S.FormNewArtArea
                                                className="form-newArt__area"
                                                name="text"
                                                // id="formArea"
                                                // cols="auto"
                                                // rows="5"
                                                // value={text}
                                                placeholder="Введите описание"
                                                {...register('text', {
                                                    required:
                                                        '* Пожалуйста, напишиье комментарий',
                                                    // onChange: (event) => {
                                                    //     setText(
                                                    //         event.target.value,
                                                    //     );
                                                    // },
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
                                        <S.FormNewArtBtnPub
                                            className="form-newArt__btn-pub btn-hov02"
                                            type="submit"
                                            id="btnPublish"
                                        >
                                            Опубликовать
                                        </S.FormNewArtBtnPub>
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
