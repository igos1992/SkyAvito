import ArticleImgBar from '../../components/ForArticleAndForMyArticle/ArticleImgBar/ArticleImgBar';
import ArticleImgBarMob from '../../components/ForArticleAndForMyArticle/ArticleImgBarMob/ArticleImgBarMob';
import ArticleImgItem from '../../components/ForArticleAndForMyArticle/ArticleImgItem/ArticleImgItem';
import MyArticleBlock from '../../components/ForArticleAndForMyArticle/ArticleRight/MyArticleBlock/MyArticleBlock'
import MainMenu from '../../components/MainMenu/MainMenu';
import MainContent from '../../components/ProductDescription/MainContent';
import * as S from './MyArticle.styled';

function MyArticle() {
    return (
        <S.Main className="main">
            <S.MainContainer className="main__container">
                <MainMenu />
            </S.MainContainer>

            <S.MainArtic className="main__artic artic">
                <S.ArticContent className="artic__content article">
                    <S.ArticleLeft className="article__left">
                        <S.ArticleFillImg className="article__fill-img">
                            <ArticleImgItem />
                            <ArticleImgBar />
                            <ArticleImgBarMob />
                        </S.ArticleFillImg>
                    </S.ArticleLeft>
                    <S.ArticleRight className="article__right">
                        <MyArticleBlock />
                    </S.ArticleRight>
                </S.ArticContent>
            </S.MainArtic>

            <S.MainContainer className="main__container">
                <S.MainTitle className="main__title title">
                    Описание товара
                </S.MainTitle>
                <MainContent />
            </S.MainContainer>
        </S.Main>
    );
}

export default MyArticle;
