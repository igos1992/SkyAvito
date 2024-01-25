import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const size = {
    mobile: '768px',
    tablet: '966px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
};

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #f1f1f1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;
    @media ${device.mobile} {
        width: 100%;
        min-width: 320px;
        padding: 0 0px;
    }
`;

export const Header = styled.header`
    background-color: #009ee4;
    @media ${device.mobile} {
        padding: 0 20px;
        width: 100%;
        height: 55px;
        -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3;
        padding: 0 20px;
    }
`;

export const HeaderNav = styled.nav`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0 10px;
    height: 79px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: end;
    @media ${device.mobile} {
        height: 55px;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: start;
        padding: 0;
    }
`;

export const HeaderLogo = styled.div`
    display: none;
    @media ${device.mobile} {
        display: block;
    }
`;

export const LogoMobLink = styled(NavLink)`
    @media ${device.mobile} {
        display: block;
        width: 32px;
        height: 32px;
    }
`;

export const LogoMobImg = styled.img`
    @media ${device.mobile} {
        width: 32px;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }
`;

export const HeaderBtnPutAd = styled.button`
    width: 232px;
    height: 40px;
    border: 1px solid #ffffff;
    border-radius: 6px;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    line-height: 1;
    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #ffffff;
    }
    @media ${device.mobile} {
        display: none;
    }
`;

export const HeaderBtnLk = styled.button`
    width: 173px;
    height: 40px;
    margin-left: 10px;
    border: 1px solid #ffffff;
    border-radius: 6px;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    line-height: 1;
    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #ffffff;
    }
    @media ${device.mobile} {
        display: none;
    }
`;

export const Main = styled.main`
    margin: 0 auto;
`;

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 5px;
    @media ${device.mobile} {
        padding: 0 20px 0;
    }
`;

export const MainMenu = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 11px 0;
    padding: 43px 5px 77px;
    @media ${device.mobile} {
        display: none;
    }
`;

export const MenuLogoLink = styled(NavLink)`
    width: 54;
    height: 50px;
`;

export const MenuLogoImg = styled.img`
    width: 54px;
    height: auto;
`;

export const MenuForm = styled(NavLink)`
    margin-left: 60px;
    max-width: 1044px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;

export const MenuBtnSerch = styled.button`
    width: 241px;
    height: 50px;
    background-color: #009ee4;
    border: 1px solid #009ee4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    &:hover {
        background-color: #0080c1;
    }
`;

export const MainArtic = styled.div`
    max-width: 1178px;
    padding: 0 0 70px;
    margin: 0 auto;
    padding: 0 5px 70px;
    @media ${device.mobile} {
        max-width: 1178px;
        width: 100%;
        padding: 55px 0 0px;
        margin: 0 auto;
    }
`;

export const ArticContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    @media ${device.mobile} {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
`;

export const ArticleLeft = styled.div`
    max-width: 480px;
    margin-right: 54px;

    @media ${device.tablet} {
        width: 100%;
        min-width: 320px;
        padding: 0 0px;
    }
    @media ${device.mobile} {
        max-width: 100%;
        width: 100%;
        min-width: 320px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

export const ArticleFillImg = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    @media ${device.mobile} {
        max-width: 100%;
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: relative;
        &::before {
            content: '';
            display: block;
            width: 23px;
            height: 23px;
            background-color: transparent;
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            position: absolute;
            top: 24px;
            left: 32px;
            cursor: pointer;
        }
    }
`;

export const ArticleImg = styled.div`
    width: 480px;
    height: 480px;
    background-color: #f0f0f0;
    margin: 0 5px;
    @media ${device.mobile} {
        width: 100%;
        min-width: 320px;
        height: auto;
        min-height: 320px;
        margin: 0 0px;
    }
`;

export const ArticleImgItem = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const ArticleImgBar = styled.div`
    margin-top: 30px;
    width: 490px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
    overflow: hidden;
    margin-left: -5px;
    @media ${device.mobile} {
        display: none;
    }
`;

export const ArticleImgBarDiv = styled.div`
    width: 88px;
    min-width: 88px;
    height: 88px;
    background-color: #f0f0f0;
    border: 2px solid #f0f0f0;
    margin: 0 5px;
    &:hover {
        border: 2px solid #009ee4;
    }
`;

export const ArticleImgBarDivItem = styled.div`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const ArticleImgBarMob = styled.div`
    display: none;
    @media ${device.mobile} {
        display: block;
        width: 68px;
        height: 8px;
        position: absolute;
        bottom: 20px;
        left: calc(50% - (68px / 2));
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
`;

export const ImgBarMobCircle = styled.div`
    background-color: #ffffff;
    &:active {
        background-color: #ffffff;
    }
    @media ${device.mobile} {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid #ffffff;
    }
`;

export const ArticleRight = styled.div`
    max-width: 621px;
    @media ${device.mobile} {
        max-width: 100%;
        width: 100%;
        padding: 0 20px;
    }
`;

export const ArticleBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const ArticleTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    @media ${device.mobile} {
        font-size: 18px;
        line-height: 1;
        margin-bottom: 10px;
    }
`;

export const ArticleInfo = styled.div`
    margin-bottom: 34px;
    @media ${device.mobile} {
        margin-bottom: 20px;
    }
`;

export const ArticleDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 17px;
        color: #5f5f5f;
        margin-bottom: 4px;
    }
`;

export const ArticleCity = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 17px;
        color: #5f5f5f;
        margin-bottom: 4px;
    }
`;

export const ArticleLink = styled(NavLink)`
    font-size: 16px;
    line-height: 21px;
    color: #009ee4;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 19px;
        color: #009ee4;
    }
`;

export const ArticlePrice = styled.p`
    font-size: 28px;
    line-height: 39px;
    font-weight: 700;
    margin-bottom: 20px;
    @media ${device.mobile} {
        font-size: 18px;
        line-height: 25px;
        font-weight: 700;
        margin-bottom: 20px;
    }
`;

export const ArticleBtnBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`;

export const ArticleBtnRedact = styled.button`
    width: 189px;
    margin-right: 10px;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #ffffff;
    margin-bottom: 10px;
    &:hover {
        background-color: #0080c1;
    }

    @media ${device.tablet} {
        width: 225px;
        margin-right: 0;
    }
    @media ${device.mobile} {
        width: 100%;
        height: 57px;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
    }
`;

export const ArticleBtnRemove = styled.button`
    width: 225px;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #ffffff;
    margin-bottom: 10px;
    &:hover {
        background-color: #0080c1;
    }

    @media ${device.tablet} {
        width: 225px;
    }
    @media ${device.mobile} {
        width: 100%;
        height: 57px;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
    }
`;

export const ArticleAuthor = styled.div`
    margin-top: 24px;
    margin-bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    @media ${device.mobile} {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

export const AuthorImg = styled.div`
    width: 40px;
    height: 40px;
    background-color: #f0f0f0;
    border-radius: 50%;
`;

export const AuthorImgItem = styled.div`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const AuthorCont = styled.div`
    margin-left: 12px;
`;

export const AuthorName = styled.p`
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #009ee4;
    @media ${device.mobile} {
        font-size: 18px;
        line-height: 23px;
        font-weight: 600;
    }
`;

export const AuthorAbout = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #5f5f5f;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 28p;
    }
`;

export const MainTitle = styled.h3`
    margin-bottom: 32px;
    padding: 0 5px;
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    @media ${device.mobile} {
        margin-bottom: 14px;
        padding: 0;
    }
`;

export const MainContent = styled.div`
    max-width: 792px;
    width: 100%;
    padding: 0 5px 117px;
    @media ${device.mobile} {
        width: 100%;
        margin: 0 auto;
        padding: 0 0 84px;
    }
`;

export const MainText = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`;

export const Footer = styled.footer`
    display: none;
    @media ${device.mobile} {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 3;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 54px;
        width: 100%;
        background-color: #ffffff;
        -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
    }
`;

export const FooterContainer = styled.div`
    @media ${device.mobile} {
        width: 225px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
`;

export const FooterImg = styled.div`
    @media ${device.mobile} {
        width: 42px;
        height: 42px;
    }
`;

export const FooterImgItem = styled.img`
    @media ${device.mobile} {
        width: 100%;
        height: 100%;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }
`;
