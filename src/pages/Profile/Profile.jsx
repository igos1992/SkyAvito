import MainContent from '../../components/MainContent/MainContent';
import MainMenu from '../../components/MainMenu/MainMenu';
import MainProfile from '../../components/MainProfile/MainProfile';
import * as S from './Profile.styled';

function Profile() {
    return (
        <S.Main className="main">
            <S.MainContainer className="main__container">
                <S.MainCenterBlock className="main__center-block">
                    <MainMenu />

                    <S.MainH2 className="main__h2">
                        Здравствуйте, Антон!
                    </S.MainH2>

                    <MainProfile />

                    <S.MainTitle className="main__title title">
                        Мои товары
                    </S.MainTitle>
                </S.MainCenterBlock>

                <MainContent />
            </S.MainContainer>
        </S.Main>
    );
}

export default Profile;
