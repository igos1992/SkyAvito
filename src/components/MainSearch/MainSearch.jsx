import * as S from './MainSearch.styled';
import Logo from '../UI/Logo/Logo'

function MainSearch() {
    return (
        <S.MainSearch className="main__search search">
            <Logo />
            <S.SearchForm className="search__form" action="#">
                <S.SearchText
                    className="search__text"
                    type="search"
                    placeholder="Поиск по объявлениям"
                    name="search"
                />
                <S.SearchTextMob
                    className="search__text-mob"
                    type="search"
                    placeholder="Поиск"
                    name="search-mob"
                />
                <S.SearchBtn className="search__btn btn-hov02">
                    Найти
                </S.SearchBtn>
            </S.SearchForm>
        </S.MainSearch>
    );
}

export default MainSearch;
