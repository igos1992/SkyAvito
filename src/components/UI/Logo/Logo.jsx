import * as S from './Logo.styled';

function Logo() {
    return (
        <>
            <S.SearchLogoLink className="search__logo-link" to={'/'}>
                <S.SearchLogoImg
                    className="search__logo-img"
                    src="/img/logo.png"
                    alt="logo"
                />
            </S.SearchLogoLink>
            <S.SearchLogoMobLink className="search__logo-mob-link" to={'/'}>
                <S.SearchLogoMobImg
                    className="search__logo-mob-img"
                    src="/img/logo-mob.png"
                    alt="logo"
                />
            </S.SearchLogoMobLink>
        </>
    );
}

export default Logo;
