// import * as S from './MyArticleBlock.styled';
// import { useState } from 'react';
// import Atclsettings from '../../../PoPups/Atclsettings/Atclsettings';

// function ArticleBlock() {
//     const [modalEditAnAddIsOpen, setModalEditAnAddIsOpen] = useState(false);
//     return (
//         <S.ArticleBlock className="article__block">
//             <S.ArticleTitle className="article__title title">
//                 Ракетка для большого тенниса Triumph Pro STС Б/У
//             </S.ArticleTitle>
//             <S.ArticleInfo className="article__info">
//                 <S.ArticleDate className="article__date">
//                     Сегодня в 10:45
//                 </S.ArticleDate>
//                 <S.ArticleCity className="article__city">
//                     Санкт-Петербург
//                 </S.ArticleCity>
//                 <S.ArticleLink
//                     className="article__link"
//                     href=""
//                     target="_blank"
//                     rel=""
//                 >
//                     4 отзыва
//                 </S.ArticleLink>
//             </S.ArticleInfo>
//             <S.ArticlePrice className="article__price">2 200 ₽</S.ArticlePrice>
//             {/* Необходима логика на кнопки, что если юзер то одна кнопка, если продавец, то две кнопки */}
//             <S.ArticleBtnBlock className="article__btn-block">
//                 <S.ArticleBtnRedact
//                     className="article__btn btn-redact btn-hov02"
//                     onClick={() => setModalEditAnAddIsOpen(true)}
//                 >
//                     Редактировать
//                 </S.ArticleBtnRedact>
//                 <Atclsettings
//                     isOpen={modalEditAnAddIsOpen}
//                     onClose={() => setModalEditAnAddIsOpen(false)}
//                 />
//                 <S.ArticleBtnRemove className="article__btn btn-remove btn-hov02">
//                     Снять с публикации
//                 </S.ArticleBtnRemove>
//             </S.ArticleBtnBlock>
//             <S.ArticleAuthor className="article__author author">
//                 <S.AuthorImgItem className="author__img-item">
//                     <S.AuthorImg className="author__img" src="" alt="" />
//                 </S.AuthorImgItem>
//                 <S.AuthorCont className="author__cont">
//                     <S.AuthorName className="author__name">Антон</S.AuthorName>
//                     <S.AuthorAbout className="author__about">
//                         Продает товары с мая 2022
//                     </S.AuthorAbout>
//                 </S.AuthorCont>
//             </S.ArticleAuthor>
//         </S.ArticleBlock>
//     );
// }

// export default ArticleBlock;
