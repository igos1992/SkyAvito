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

export const HeaderLogo = styled.div`
    display: none;
    @media ${device.mobile} {
        display: block;
    }
`;

export const LogoMobImg = styled.img`
    @media ${device.mobile} {
        width: 32px;
        height: 100%;
        display: block;
        -o-object-fit: fill;
        object-fit: fill;
    }
`;

export const LogoMobLink = styled(NavLink)`
    @media ${device.mobile} {
        display: block;
        width: 32px;
        height: 32px;
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

export const HeaderBtnLkLink = styled(NavLink)`
    @media ${device.mobile} {
        display: none;
    }
`;

export const HeaderBtnMainCenter = styled(NavLink)`
    width: 224px;
    height: 40px;
    margin-left: 10px;
    border: 1px solid #ffffff;
    border-radius: 6px;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    line-height: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #ffffff;
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
        -o-object-fit: fill;
        object-fit: fill;
    }
`;