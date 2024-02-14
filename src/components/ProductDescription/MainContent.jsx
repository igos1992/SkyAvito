import * as S from './MainContent.styled';

function MainContainer({ dataAds }) {
    return (
        <S.MainContent className="main__content">
            <S.MainText className="main__text">
                {dataAds?.description}
            </S.MainText>
        </S.MainContent>
    );
}

export default MainContainer;
