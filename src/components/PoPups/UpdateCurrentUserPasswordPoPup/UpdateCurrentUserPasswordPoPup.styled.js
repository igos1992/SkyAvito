import { css, styled } from 'styled-components';

const size = {
    mobile: '600px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.75);
    overflow-y: auto;
    transition: opacity 0.3sS;
    z-index: 999;
`;

export const ContainerBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
`;

export const ModalBlock = styled.div`
    position: absolute;
    z-index: 5;
    left: calc(50% - (600px / 2));
    top: 60px;
    opacity: 1;
    @media ${device.mobile} {
        position: absolute;
        z-index: 5;
        left: 0px;
        top: 55px;
        opacity: 1;
    }
`;

export const SaveChangesPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    height: 50px;
    margin: 0px 7px 0;
    padding: 10px;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    cursor: pointer;
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

export const ModalContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 600px;
    height: auto;
    padding: 32px 50px 42px;
    background-color: #ffffff;
    border-radius: 12px;
    position: relative;
    @media ${device.mobile} {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        width: 100%;
        min-width: 320px;
        height: auto;
        padding: 30px 20px 30px;
    }
`;

export const ModalBtnClose = styled.button`
    width: 23px;
    height: 23px;
    position: absolute;
    top: 47px;
    right: 50px;
    z-index: 3;
    cursor: pointer;
    border: none;
    background-color: #ffffff;
    @media ${device.mobile} {
        display: none;
    }
`;

export const ModalBtnCloseLine = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    &:hover {
        background-color: #0080c1;
    }
    &::before {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #d9d9d9;
        top: 47%;
        right: -4px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #d9d9d9;
        top: 47%;
        right: -4px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    @media ${device.mobile} {
        display: none;
    }
`;

export const SettingsDiv = styled.div`
    display: inline-block;
    margin: 0 7px 5px;
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
    margin-bottom: 10px;
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

export const SettingsPhone = styled.input`
    width: 450px;
    margin-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
    ${GeneralInputField}
    @media ${device.mobile} {
        width: 100%;
    }
`;
