import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const size = {
    mobile: '768px',
    tablet: '890px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
};

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

export const MenuLogoLink = styled(NavLink)`
    width: 54;
    height: 50px;
`;

export const MenuLogoImg = styled.img`
    width: 54px;
    height: auto;
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
        background-color: #ffffff;
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
            content: "";
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
`;

export const ArticleImgBarItem = styled.div`
    display: flex;
`;

export const ArticleRight = styled.div`
    max-width: 621px;
    @media ${device.mobile} {
        max-width: 100%;
        width: 100%;
        padding: 0 20px;
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
        font-size: 18px;
        line-height: 1;
    }
`;
