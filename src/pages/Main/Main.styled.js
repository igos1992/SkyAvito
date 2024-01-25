import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const size = {
    mobile: '590px',
    tablet: '890px',
    laptop: '1158px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
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
        min-height: 100vh;
        background-color: #ffffff;
    }
`;

export const Header = styled.header`
    background-color: #009ee4;
    @media ${device.mobile} {
        display: none;
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
`;

export const HeaderBtnMainCenter = styled.button`
    width: 224px;
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
`;

export const Main = styled.main``;

export const MainSearch = styled.div`
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
    max-width: 1178px;
    margin: 0 auto;
    padding: 31px 10px 0px;
    @media ${device.mobile} {
        width: 100%;
        height: 55px;
        background-color: #009ee4;
        -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        margin-bottom: 0px;
        padding: 11px 17px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3;
    }
`;

export const SearchLogoLink = styled(NavLink)`
    @media ${device.mobile} {
        display: none;
    }
`;

export const SearchLogoImg = styled.img`
    width: 54px;
    height: auto;
`;

export const SearchLogoMobLink = styled(NavLink)`
    display: none;
    @media ${device.mobile} {
        display: block;
        width: 32px;
        height: 32px;
    }
`;

export const SearchLogoMobImg = styled.img`
    @media ${device.mobile} {
        width: 32px;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }
`;

export const SearchForm = styled(NavLink)`
    margin-left: 60px;
    max-width: 1044px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    @media ${device.mobile} {
        margin-left: 10px;
        max-width: 1044px;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
`;

export const SearchText = styled.input`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: transparent;
    padding: 13px 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    &::-webkit-input-placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    &:-ms-input-placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    &::-ms-input-placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    &::placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    @media ${device.mobile} {
        display: none;
    }
`;

export const SearchTextMob = styled.input`
    display: none;
    @media ${device.mobile} {
        display: inline-block;
        width: 100%;
        height: 32px;
        border: none;
        border-radius: 30px;
        background-color: #ffffff;
        padding: 5px 17px;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
        &::-webkit-input-placeholder {
            background-color: transparent;
            color: #b3b3b3;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
        &:-ms-input-placeholder {
            background-color: transparent;
            color: #b3b3b3;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
        &::-ms-input-placeholder {
            background-color: transparent;
            color: #b3b3b3;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
        &::placeholder {
            background-color: transparent;
            color: #b3b3b3;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
    }
`;

export const SearchBtn = styled.button`
    margin-left: 10px;
    width: 158px;
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
    @media ${device.mobile} {
        display: none;
    }
`;

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 52px 10px 37px;
    @media ${device.mobile} {
        padding: 85px 10px 84px;
    }
`;

export const MainH2 = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
    @media ${device.mobile} {
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        margin-bottom: 20px;
        text-align: center;
        position: relative;
        &::before {
            content: '';
            display: block;
            width: 12px;
            height: 12px;
            background-color: transparent;
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            position: absolute;
            top: 9px;
            left: 13px;
            cursor: pointer;
        }
    }
`;

export const MainContent = styled.div`
    width: 100%;
    margin: 0 auto;
    @media ${device.mobile} {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        position: fixed;
        right: 0;
        left: 0;
        top: 134px;
        bottom: 84px;
    }
`;

export const ContentCards = styled.div`
    max-width: 1158px;
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px) [4];
    grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 40px 26px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow-y: auto;
    scrollbar-color: #ffffff #2e2e2e;
    scrollbar-width: none;
    scrollbar-width: 0px;
    height: 922px;
    &::-webkit-scrollbar {
        width: 0px;
        background-color: #009ee4;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #0080c1;
        border-radius: 3px;
    }
    @media ${device.laptop} {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: (270px) [3];
        grid-template-columns: repeat(3, 270px);
    }
    @media ${device.tablet} {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: (270px) [2];
        grid-template-columns: repeat(2, 270px);
    }
    @media ${device.mobile} {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: (137px) [2];
        grid-template-columns: repeat(2, 137px);
        grid-auto-rows: 293px;
        grid-gap: 10px 10px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
`;

export const CardsItem = styled.div`
    margin: 0;
    @media ${device.mobile} {
        margin: 0;
        -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
    }
`;

export const CardsCard = styled.div`
    width: 270px;
    height: 441px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    @media ${device.mobile} {
        width: 137px;
        height: 293px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
`;

export const CardImage = styled.div`
    width: 270px;
    height: 270px;
    background-color: #f0f0f0;
    @media ${device.mobile} {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        width: 137px;
        height: 132px;
        background-color: #d9d9d9;
    }
`;

export const CardImageItem = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    @media ${device.mobile} {
        width: 100%;
        height: 100%;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
`;

export const CardContent = styled.div``;

export const CardTitle = styled.h3`
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media ${device.mobile} {
        height: 51px;
        font-size: 14px;
        line-height: 17px;
        color: #009ee4;
        margin-bottom: 10px;
        margin-top: 10px;
    }
`;

export const CardPrice = styled.p`
    color: #000000;
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    margin-bottom: 10px;
    @media ${device.mobile} {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const CardPlace = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
    @media ${device.mobile} {
        font-size: 12px;
        line-height: 16px;
        color: #5f5f5f;
    }
`;

export const CardDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    @media ${device.mobile} {
        font-size: 12px;
        line-height: 16px;
        color: #5f5f5f;
    }
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
