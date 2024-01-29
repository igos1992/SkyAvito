import * as S from './ArticleBlock.styled';
import ShowPhoneButton from '../../UI/ShowPhoneButton/ShowPhoneButton';

function ArticleBlock() {
    return (
        <S.ArticleBlock className="article__block">
            <S.ArticleTitle className="article__title title">
                Ракетка для большого тенниса Triumph Pro STС Б/У
            </S.ArticleTitle>
            <S.ArticleInfo className="article__info">
                <S.ArticleDate className="article__date">
                    Сегодня в 10:45
                </S.ArticleDate>
                <S.ArticleCity className="article__city">
                    Санкт-Петербург
                </S.ArticleCity>
                <S.ArticleLink
                    className="article__link"
                    href=""
                    target="_blank"
                    rel=""
                >
                    23 отзыва
                </S.ArticleLink>
            </S.ArticleInfo>
            <S.ArticlePrice className="article__price">2 200 ₽</S.ArticlePrice>
            {/* Необходима логика на кнопки, что если юзер то одна кнопка, если продавец, то две кнопки */}
            <ShowPhoneButton />
            <S.ArticleBtnBlock className="article__btn-block">
                <S.ArticleBtnRedact className="article__btn btn-redact btn-hov02">
                    Редактировать
                </S.ArticleBtnRedact>
                <S.ArticleBtnRemove className="article__btn btn-remove btn-hov02">
                    Снять с публикации
                </S.ArticleBtnRemove>
            </S.ArticleBtnBlock>
            <S.ArticleAuthor className="article__author author">
                <S.AuthorImgItem className="author__img-item">
                    <S.AuthorImg className="author__img" src="" alt="" />
                </S.AuthorImgItem>
                <S.AuthorCont className="author__cont">
                    <S.AuthorName className="author__name">Кирилл</S.AuthorName>
                    <S.AuthorAbout className="author__about">
                        Продает товары с августа 2021
                    </S.AuthorAbout>
                </S.AuthorCont>
            </S.ArticleAuthor>
        </S.ArticleBlock>
    );
}

export default ArticleBlock;
