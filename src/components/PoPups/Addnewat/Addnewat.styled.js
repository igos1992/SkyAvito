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

export const ModalTitle = styled.h3`
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
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

export const ModalFormNewArt = styled.form`
    margin-top: 22px;
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
    margin-bottom: 20px;
    position: relative;
    @media ${device.mobile} {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-bottom: 18px;
    }
`;

export const FormNewArtBlockLabel = styled.label`
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    @media ${device.mobile} {
        margin-bottom: 5px;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
    }
`;

export const FormNewArtInput = styled.input`
    padding: 13px 19px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    &:-webkit-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }
    &:-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }
    &::-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }
    ::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }
    @media ${device.mobile} {
        padding: 9px 17px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        font-size: 16px;
        line-height: 1;
        width: 100%;
        &::-webkit-input-placeholder {
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

export const FormNewArtArea = styled.textarea`
    padding: 13px 19px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-height: 200px;
    font-size: 16px;
    line-height: 24px;
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
        padding: 9px 17px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        font-size: 16px;
        line-height: 1;
        font-family: 'Roboto', sans-serif;
        width: 100%;
        max-height: 107px;
        &::-webkit-input-placeholder {
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

export const FormNewArtP = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 10px;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 10px;
    }
`;

export const FormNewArtPSpan = styled.span`
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.3);
    @media ${device.mobile} {
        display: block;
        margin-left: 0px;
        color: rgba(0, 0, 0, 0.3);
    }
`;

export const FormNewArtInputPrice = styled.input`
    padding: 13px 19px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    width: 200px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    &:-webkit-input-placeholder {
        text-align: end;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    &:-ms-input-placeholder {
        text-align: end;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    &::-ms-input-placeholder {
        text-align: end;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    &::placeholder {
        text-align: end;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    @media ${device.mobile} {
        padding: 9px 17px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        font-size: 16px;
        line-height: 1;
        width: 100%;
        &:-webkit-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #000000;
        }
        &:-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #000000;
        }
        &::-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #000000;
        }
        &::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #000000;
        }
    }
`;

export const FormNewArtInputPriceCover = styled.div`
width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #FFFFFF;
  &::after {
    content: "\A0 \20BD";
    width: 24px;
    height: 24px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
  }
  @media ${device.mobile} {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 9px;
    left: auto;
    right: 18px;
    &::after {
        font-size: 14px;
        line-height: 21px;
      }
}
`;

export const FormNewArtBtnPub = styled.button`
    margin-top: 10px;
    width: 181px;
    height: 50px;
    background: #0080c1;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    &:hover {
        background-color: #0080c1;
    }
    &:disabled {
        background-color: #d9d9d9;
    }
    @media ${device.mobile} {
        margin-top: 10px;
        width: 100%;
        height: 46px;
        &:disabled {
            background-color: #d9d9d9;
        }
    }
`;
