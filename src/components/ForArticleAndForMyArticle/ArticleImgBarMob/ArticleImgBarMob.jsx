import * as S from './ArticleImgBarMob.styled';

function ArticleImgBarMob() {
    return (
        <S.ArticleImgBarMob className="article__img-bar-mob img-bar-mob">
            <S.ImgBarMobCircle className="img-bar-mob__circle circle-active" />
            <S.ImgBarMobCircle className="img-bar-mob__circle" />
            <S.ImgBarMobCircle className="img-bar-mob__circle" />
            <S.ImgBarMobCircle className="img-bar-mob__circle" />
            <S.ImgBarMobCircle className="img-bar-mob__circle" />
        </S.ArticleImgBarMob>
    );
}

export default ArticleImgBarMob;
