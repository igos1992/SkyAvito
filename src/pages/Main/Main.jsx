import * as S from './Main.styled';
import MainSearch from '../../components/MainSearch/MainSearch';
import MainContent from '../../components/MainContent/MainContent';

function Main() {
    return (
        <S.Main className="main">
            <MainSearch />
            <S.MainContainer className="main__container">
                <S.MainH2 className="main__h2">Объявления</S.MainH2>
                <MainContent />
            </S.MainContainer>
        </S.Main>
    );
}

export default Main;
