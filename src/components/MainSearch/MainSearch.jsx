import * as S from './MainSearch.styled';
import Logo from '../UI/Logo/Logo';
import {
    useDispatch,
    // useSelector
} from 'react-redux';
import {
    // selectSearchByAdsTitle,
    setSearchByAdsTitle,
} from '../../redux/RequestsWithAds/adsSlice';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MainSearch() {
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('ads') || '';
    const [search, setSearch] = useState(postQuery);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;
        setSearchParams({ ads: query });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchByAdsTitle(postQuery));
    }, [postQuery]);

    return (
        <S.MainSearch className="main__search search">
            <Logo />
            <S.SearchForm
                className="search__form"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <S.SearchText
                    className="search__text"
                    type="search"
                    value={search}
                    placeholder="Поиск по объявлениям"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <S.SearchTextMob
                    className="search__text-mob"
                    type="search"
                    value={search}
                    placeholder="Поиск"
                    name="search-mob"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <S.SearchBtn
                    className="search__btn btn-hov02"
                    type="submit"
                    value="Найти"
                />
            </S.SearchForm>
        </S.MainSearch>
    );
}

export default MainSearch;
