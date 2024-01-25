import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

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
    }
`;

export const Header = styled.header`
    background-color: #009ee4;
    @media ${device.mobile} {
        width: 100%;
        height: 55px;
        -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3;
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
        padding: 0 20px;
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

export const MainMenu = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 11px 0;
    width: 100%;
    padding: 31px 10px 64px;
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
`;

export const MenuBtn = styled.button`
    width: 241px;
    height: 50px;
    background-color: #009ee4;
    border: 1px solid #009ee4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    :hover {
        background-color: #0080c1;
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
    }
`;

export const MainProfile = styled.div`
    width: 100%;
    padding: 0 0 70px;
    @media ${device.mobile} {
        width: 100%;
        padding: 0 0 40px;
    }
`;

export const ProfileContent = styled.div`
    max-width: 834px;
    @media ${device.tablet} {
        max-width: 834px;
        width: 100%;
    }
`;

export const ProfileTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
    @media ${device.mobile} {
        font-size: 18px;
        line-height: 1;
    }
`;

export const ProfileSettings = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    @media ${device.tablet} {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
`;

export const SettingsLeft = styled.div`
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
    margin-right: 43px;
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
        margin-right: 0;
    }
`;

export const SettingsImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #f0f0f0;
    @media ${device.mobile} {
        width: 132px;
        height: 132px;
    }
`;

export const SettingsImgItem = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const SettingsChangePhoto = styled(NavLink)`
    margin-top: 10px;
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    color: #009ee4;
`;

export const SettingsRight = styled.div`
    width: 630px;
    @media ${device.mobile} {
        width: 100%;
    }
`;

export const SettingsForm = styled(NavLink)`
    width: 630px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    @media ${device.mobile} {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
`;

export const SettingsDiv = styled.div`
    display: inline-block;
    margin: 0 7px 20px;
    @media ${device.mobile} {
        display: inline-block;
        margin: 0 0px 18px;
    }
`;

export const SettingsDivLabel = styled.label`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #c4c4c4;
    margin-bottom: 4px;
    display: block;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 21px;
        color: #c4c4c4;
        margin-bottom: 6px;
    }
`;

export const GeneralInputField = css`
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
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
        border-radius: 30px;
        padding: 9px 17px;
        &::-webkit-input-placeholder {
            font-size: 14px;
            line-height: 21px;
        }
        &:-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
        }
        &::-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
        }
        &::placeholder {
            font-size: 14px;
            line-height: 21px;
        }
    }
`;

export const SettingsFName = styled.input`
    width: 300px;
    ${GeneralInputField}
    @media ${device.mobile} {
        width: 100%;
    }
`;

export const SettingsLName = styled.input`
    width: 300px;
    ${GeneralInputField}
    @media ${device.mobile} {
        width: 100%;
    }
`;

export const SettingsCity = styled.input`
    width: 300px;
    ${GeneralInputField}
    @media ${device.mobile} {
        width: 100%;
    }
`;

export const SettingsPhone = styled.input`
    width: 614px;
    ${GeneralInputField}
    @media ${device.mobile} {
        width: 100%;
    }
`;

export const SettingsBtn = styled.button`
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    width: 154px;
    height: 50px;
    margin: 10px 7px 0;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    :hover {
        background-color: #0080c1;
    }
    @media ${device.mobile} {
        font-size: 16px;
        line-height: 1;
        width: 100%;
        height: 46px;
        margin: 8px 0px 0;
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

export const MainContent = styled.div`
    width: 100%;
    margin: 0 auto;
    @media ${device.mobile} {
        width: 100%;
        margin: 0 auto;
        font-size: 18px;
        line-height: 1;
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
    scrollbar-width: thin;
    scrollbar-width: 0px;
    height: 441px;
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
        height: 596px;
    }
`;

export const CardsItem = styled.div`
    margin: 0;
    @media ${device.mobile} {
        margin: 0;
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
        width: 137px;
        height: 132px;
        background-color: #d9d9d9;
    }
`;

export const CardImageItem = styled.img`
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
