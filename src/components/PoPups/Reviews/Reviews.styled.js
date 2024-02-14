import { styled } from 'styled-components';

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
    left: calc(50% - (800px / 2));
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
    width: 800px;
    height: auto;
    padding: 20px 92px 57px 50px;
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

export const ModalTitle = styled.h3`
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 15px;
    @media ${device.mobile} {
        font-size: 24px;
        line-height: 29px;
        padding: 0 0 0 26px;
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
            left: 0;
            cursor: pointer;
        }
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

export const ModalScroll = styled.div`
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
    overflow-y: auto;
    scrollbar-color: #ffffff #2e2e2e;
    scrollbar-width: none;
    scrollbar-width: 0px;
    &::-webkit-scrollbar {
        width: 0px;
        background-color: #ffffff;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #d9d9d9;
        border-radius: 0px;
    }
`;

export const ModalFormNewArt = styled.form`
    margin-top: 5px;
    margin-bottom: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    @media ${device.mobile} {
        margin-top: 22px;
    }
`;

export const FormNewArtBlock = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 14px;
    @media ${device.mobile} {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-bottom: 16px;
    }
`;

export const FormNewArtBlockLabel = styled.label`
    margin-bottom: 14px;
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;
    color: #000000;
    @media ${device.mobile} {
        display: none;
    }
`;

export const FormNewArtArea = styled.input`
    font-family: 'Roboto', sans-serif;
    padding: 10px 19px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 100px;
    max-height: 100px;
    &::-webkit-input-placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }
    &:-ms-input-placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }
    &::-ms-input-placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }
    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }
    @media ${device.mobile} {
        font-family: 'Roboto', sans-serif;
        width: 100%;
        max-height: 107px;
        padding: 9px 17px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        font-size: 16px;
        line-height: 1;
        &:-webkit-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
        }
        &:-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
        }
        &::-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
        }
        &::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
        }
    }
`;

export const FillInTheField = styled.div`
    color: red;
    margin-top: 15px;
`;

export const FillInTheFieldP = styled.p`
    margin: 0px;
`;

export const FillInTheFieldPNoComments = styled.p`
    margin: 0px;
    color: red;
    margin-bottom: 15px;
`;

export const FormNewArtBtnPub = styled.button`
    width: 181px;
    height: 50px;
    background: #d9d9d9;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    &:hover {
        background-color: #0080c1;
    }
    &:disable {
        background-color: #0080c1;
    }
    @media ${device.mobile} {
        margin-top: 0px;
        width: 100%;
        height: 46px;
        background-color: #009ee4;
    }
`;

export const FormNewArtBtnPubInput = styled.input`
    width: 181px;
    height: 50px;
    background: #d9d9d9;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    cursor: pointer;
    &::placeholder {
        color: blue;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        text-align: center;
    }
    @media ${device.mobile} {
        margin-top: 0px;
        width: 100%;
        height: 46px;
        background-color: #009ee4;
    }
`;
