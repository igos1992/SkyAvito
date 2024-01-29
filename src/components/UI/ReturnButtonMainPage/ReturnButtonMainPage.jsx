import * as S from './ReturnButtonMainPage.styled';

function ReturnButtonMainPage() {
    return (
        <S.MenuLink className="menu__form" to="/">
            <S.MenuBtnSerch
                className="menu__btn-serch btn-hov02"
                id="btnGoBack"
            >
                Вернуться на главную
            </S.MenuBtnSerch>
        </S.MenuLink>
    );
}

export default ReturnButtonMainPage;
