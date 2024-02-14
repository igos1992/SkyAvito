import { css, styled } from 'styled-components';

const size = {
    mobile: '620px',
    tablet: '890px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
};

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

export const UploadFileInput = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    width: 0.4px;
    height: 0.4px;
`;

export const UploadFileButton = styled.button`
    margin-top: 10px;
    text-decoration: none;
    color: #009ee4;
    transition: 0.25s ease;
    padding: 0;
    border: none;
    font: inherit;
    background-color: transparent;
    cursor: pointer;
`;

export const SettingsRight = styled.div`
    width: 630px;
    @media ${device.mobile} {
        width: 100%;
    }
`;

export const SettingsForm = styled.form`
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

export const HeaderBtnPutAd = styled.div`
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    width: 154px;
    height: 50px;
    margin: 10px 7px 0;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    :hover {
        background-color: #0080c1;
    }
    @media ${device.mobile} {
        font-size: 16px;
        line-height: 1;
        width: 100%;
        height: 46px;
        margin: 8px 0px 0;
        display: flex;
    align-items: center;
    justify-content: center;
    }
}`;

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

export const FillInTheField = styled.div`
    color: red;
    margin-top: 15px;
`;

export const SettingsBtn = styled.button`
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    height: 50px;
    margin: 10px 7px 0;
    padding: 10px;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    :hover {
        border: 1px solid #d9d9d9;
        background-color: #0080c1;
    }
    &:disabled {
        border: 1px solid #d9d9d9;
        background-color: #d9d9d9;
    }
    @media ${device.mobile} {
        font-size: 16px;
        line-height: 1;
        width: 100%;
        height: 46px;
        margin: 8px 0px 0;
        &:disabled {
            background-color: #303030;
        }
    }
`;
