import { NavLink } from 'react-router-dom';
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

export const ContainerEnter = styled.div`
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
    top: calc(50% - (439px / 2));
    opacity: 1;
    @media ${device.mobile} {
        position: absolute;
        z-index: 2;
        left: calc(50% - (320px / 2));
        top: 55px;
        opacity: 1;
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
    padding: 43px 47px 47px 40px;
    @media ${device.mobile} {
        width: 320px;
        height: auto;
        background-color: #ffffff;
        border-radius: 0px;
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
        padding: 40px 20px;
    }
`;

export const ModalLogo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 34px;
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
    margin-bottom: 30px;
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
        border: 1px solid #d0cece;
        padding: 9px 17px;
        border-radius: 30px;
        margin-bottom: 14px;
        &::-webkit-input-placeholder {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
        &:-ms-input-placeholder {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
        &::-ms-input-placeholder {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
        &::placeholder {
            font-style: normal;
            font-weight: 400;
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


export const ModalBtnEnter = styled.button`
    width: 278px;
    height: 52px;
    background-color: #009ee4;
    border-radius: 6px;
    margin-top: 40px;
    margin-bottom: 20px;
    border: none;
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
    &:hover {
        background-color: #0080c1;
    }
    &:active {
        background-color: #0080c1;
    }
    @media ${device.mobile} {
        height: 46px;
        margin-top: 40px;
        margin-bottom: 10px;
        border: none;
        font-size: 16px;
        line-height: 24px;
    }
`;

export const ModalBtnSignup = styled.button`
    width: 278px;
    height: 52px;
    background-color: transparent;
    border: 1px solid #d0cece;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    &:hover {
        background-color: #f4f5f6;
    }
    &:active {
        background-color: #d9d9d9;
    }
    @media ${device.mobile} {
        height: 46px;
        border: 1px solid #d9d9d9;
        font-size: 16px;
        line-height: 24px;
    }
`;

export const ModalBtnSignupLink = styled(NavLink)`
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-decoration: none;
    @media ${device.mobile} {
        font-size: 16px;
        line-height: 24px;
    }
`;
