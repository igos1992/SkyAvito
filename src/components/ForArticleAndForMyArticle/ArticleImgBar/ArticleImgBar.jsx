import * as S from './ArticleImgBar.styled';

function ArticleImgBar({ dataAds }) {
    // console.log(dataAds?.images.map((img) =>));
    return (
        <>
            {dataAds?.images.map((img) => (
                <S.ArticleImgBar className="article__img-bar" key={img.id}>
                    <S.ArticleImgBarDiv className="article__img-bar-div">
                        {img?.url ? (
                            <S.ArticleImg src={`http://localhost:8090/${img?.url}`} alt="" />
                        ) : (
                            <p>Нет фото</p>
                        )
                        }
                        
                    </S.ArticleImgBarDiv>
                </S.ArticleImgBar>
            ))}
        </>
    );
}

export default ArticleImgBar;
