import { useParams } from 'react-router-dom';
import ArticleImgBar from '../../components/ForArticleAndForMyArticle/ArticleImgBar/ArticleImgBar';
import ArticleImgBarMob from '../../components/ForArticleAndForMyArticle/ArticleImgBarMob/ArticleImgBarMob';
import ArticleImgItem from '../../components/ForArticleAndForMyArticle/ArticleImgItem/ArticleImgItem';
import ArticleBlock from '../../components/ForArticleAndForMyArticle/ArticleRight/ArticleBlock';
import MainMenu from '../../components/MainMenu/MainMenu';
import MainContent from '../../components/ProductDescription/MainContent';
import { useGetAdsIDQuery } from '../../redux/RequestsWithAds/serviceQuery';
import ProductDetails from '../../components/UI/Skeletons/SkeletonArticle';
import * as S from './Article.styled';

function Article() {
    const { id } = useParams();
    const { data: dataAds, isLoading, isError, error } = useGetAdsIDQuery(id);

    return (
        <>
            <S.Main className="main">
                <S.MainContainer className="main__container">
                    <MainMenu />
                </S.MainContainer>

                {isLoading ? (
                    <ProductDetails />
                ) : (
                    <>
                        {isError && (
                            <S.SpanErrorBlock>
                                Не удалось загрузить объявления, попробуйте
                                позже: {error?.error}
                            </S.SpanErrorBlock>
                        )}
                        <S.MainArtic className="main__artic artic">
                            <S.ArticContent className="artic__content article">
                                <S.ArticleLeft className="article__left">
                                    <S.ArticleFillImg className="article__fill-img">
                                        <ArticleImgItem dataAds={dataAds} />
                                        <S.ArticleImgBarItem>
                                            <ArticleImgBar dataAds={dataAds} />
                                        </S.ArticleImgBarItem>

                                        <ArticleImgBarMob />
                                    </S.ArticleFillImg>
                                </S.ArticleLeft>
                                <S.ArticleRight className="article__right">
                                    <ArticleBlock
                                        dataAds={dataAds}
                                        isLoading={isLoading}
                                    />
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
                )}
            </S.Main>
        </>
    );
}

export default Article;
