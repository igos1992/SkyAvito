import ArticleImgBar from '../../components/ForArticleAndForMyArticle/ArticleImgBar/ArticleImgBar';
import ArticleImgBarMob from '../../components/ForArticleAndForMyArticle/ArticleImgBarMob/ArticleImgBarMob';
import ArticleImgItem from '../../components/ForArticleAndForMyArticle/ArticleImgItem/ArticleImgItem';
import ArticleBlock from '../../components/ForArticleAndForMyArticle/ArticleRight/ArticleBlock/ArticleBlock';
import MainMenu from '../../components/MainMenu/MainMenu';
import MainContent from '../../components/ProductDescription/MainContent';
import * as S from './Article.styled';
import { useParams } from 'react-router-dom';
import { useGetAdsIDQuery } from '../../redux/RequestsWithAds/serviceQuery';

function Article() {
    const params = useParams();

    const { data: dataAds } = useGetAdsIDQuery(Number(params.id));


    // console.log(dataAds);
    return (
        <S.Main className="main">
            <S.MainContainer className="main__container">
                <MainMenu />
            </S.MainContainer>

            <>
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
                            <ArticleBlock dataAds={dataAds} />
                        </S.ArticleRight>
                    </S.ArticContent>
                </S.MainArtic>

                <S.MainContainer className="main__container">
                    <S.MainTitle className="main__title title">
                        Описание товара
                    </S.MainTitle>
                    <MainContent dataAds={dataAds} />
                </S.MainContainer>
            </>
        </S.Main>
    );
}

export default Article;
