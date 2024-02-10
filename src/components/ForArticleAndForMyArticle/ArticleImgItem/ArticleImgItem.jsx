import * as S from './ArticleImgItem.styled';

function ArticleImgItem({ dataAds }) {
    console.log(dataAds?.images[0]?.url);
    return (
        <S.ArticleImgItem className="article__img-item">
            {dataAds?.images[0]?.url ? (
                <S.ArticleImg
                    className="article__img"
                    src={`http://localhost:8090/${dataAds?.images[0]?.url}`}
                    alt=""
                />
            ) : (
                <p>Нет фото</p>
            )}
        </S.ArticleImgItem>
    );
}

export default ArticleImgItem;
