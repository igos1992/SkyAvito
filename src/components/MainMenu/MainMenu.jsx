import ReturnButtonMainPage from '../UI/ReturnButtonMainPage/ReturnButtonMainPage';
import Logo from '../UI/Logo/Logo';
import * as S from './MainMenu.styled';

function MainMenu() {
    return (
        <S.MainMenu className="main__menu menu">
            <Logo />
            <ReturnButtonMainPage />
        </S.MainMenu>
    );
}

export default MainMenu;
