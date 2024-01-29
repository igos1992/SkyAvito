import CardsItemAdvertising from './CardsItemAdvertising/CardsItemAdvertising';
import * as S from './MainContent.styled';

function MainContent() {
    return (
        <S.MainContent className="main__content">
            <S.ContentCards className="content__cards cards">
                <CardsItemAdvertising />
            </S.ContentCards>
        </S.MainContent>
    );
}

export default MainContent;
