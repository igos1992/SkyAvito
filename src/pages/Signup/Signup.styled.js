import { styled } from 'styled-components';

const size = {
    mobile: '768px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
`;

export const ContainerSignup = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #f4f5f6;
`;

export const ModalBlock = styled.div`
    position: absolute;
    z-index: 2;
    left: calc(50% - (366px / 2));
    top: calc(50% - (647px / 2));
    opacity: 1;
    @media ${device.mobile} {
        left: calc(50% - (320px / 2));
        top: 55px;
    }
`;

export const ModalFormLogin = styled.form`
    width: 366px;
    background-color: #ffffff;
    border-radius: 12px;
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
    padding: 43px 42px 47px;
    @media ${device.mobile} {
        width: 320px;
        height: auto;
        border-radius: 0px;
        padding: 40px 20px;
    }
`;

export const ModalLogo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 42px;
    background-color: transparent;
    @media ${device.mobile} {
        width: 120px;
        height: 18px;
        margin-bottom: 30px;
        background-color: transparent;
    }
`;

export const ModalLogoImg = styled.img`
    width: 140px;
    height: auto;
    @media ${device.mobile} {
        width: 120px;
        height: auto;
    }
`;

export const ModalInput = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;
    margin-bottom: 38px;
    &::-webkit-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    &:-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    &::-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    @media ${device.mobile} {
        width: 100%;
        border: 1px solid #d9d9d9;
        border-radius: 30px;
        padding: 9px 19px;
        margin-bottom: 14px;
        &::-webkit-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
        &:-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
        &::-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
        &::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
    }
`;

export const FillInTheField = styled.div`
    color: red;
`;

export const FillInTheFieldP = styled.p`
    margin: 0px;
`;

export const ModalBtnSignupEnt = styled.button`
    width: 278px;
    height: 62px;
    background-color: #009ee4;
    border-radius: 6px;
    border: none;
    margin-top: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        background-color: #0080c1;
    }
    &:active {
        background-color: #0080c1;
    }
     &:disabled {
        background-color: #d9d9d9;
    }
    @media ${device.mobile} {
        height: 46px;
        border: none;
        margin-top: 26px;
        font-size: 16px;
        line-height: 24px;
         &:disabled {
        background-color: #d9d9d9;
    }
    }
    
`;

export const Error = styled.div`
    color: coral;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
    text-align: left;
`;
