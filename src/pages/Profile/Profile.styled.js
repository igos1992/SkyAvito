import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const size = {
    mobile: '620px',
    tablet: '890px',
    laptop: '1158px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
};

export const Main = styled.main``;

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 10px 79px;

    @media ${device.tablet} {
        padding: 85px 0px 84px;
    }
    @media ${device.mobile} {
        padding: 85px 0px 84px;
    }
`;

export const MainCenterBlock = styled.div`
    @media ${device.tablet} {
        margin: 0 auto;
        padding: 0 20px;
    }
    @media ${device.mobile} {
        margin: 0 auto;
        padding: 0 20px;
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

export const MenuLogoLink = styled(NavLink)`
    width: 54;
    height: 50px;
`;

export const MenuLogoImg = styled.img`
    width: 54px;
    height: auto;
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
    }
`;

export const MainTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
    @media ${device.mobile} {
        margin-bottom: 30px;
    }
`;
