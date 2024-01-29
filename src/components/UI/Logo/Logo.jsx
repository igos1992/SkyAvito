import * as S from './Logo.styled';

function Logo() {
    return (
        <>
            <S.SearchLogoLink
                className="search__logo-link"
                href="#"
                target="_blank"
            >
                <S.SearchLogoImg
                    className="search__logo-img"
                    src="img/logo.png"
                    alt="logo"
                />
            </S.SearchLogoLink>
            <S.SearchLogoMobLink
                className="search__logo-mob-link"
                href="#"
                target="_blank"
            >
                <S.SearchLogoMobImg
                    className="search__logo-mob-img"
                    src="img/logo-mob.png"
                    alt="logo"
                />
            </S.SearchLogoMobLink>
        </>
    );
}

export default Logo;
