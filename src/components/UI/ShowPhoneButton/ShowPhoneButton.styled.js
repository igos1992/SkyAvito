import { styled } from 'styled-components';

const size = {
    mobile: '768px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const ShowPhoneButton = styled.button`
    margin-top: 20px;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    width: 214px;
    height: 62px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    @media ${device.mobile} {
        width: 100%;
        height: 57px;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
    }
`;

export const ShowPhoneButtonSpan = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 400;
    @media ${device.mobile} {
        font-size: 12px;
    }
`;

export const ArticleBtnBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`;

export const ArticleBtnRedact = styled.button`
    width: 189px;
    margin-right: 10px;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #ffffff;
    margin-bottom: 10px;
    &:hover {
        background-color: #0080c1;
    }

    @media ${device.tablet} {
        width: 225px;
    }
    @media ${device.mobile} {
        width: 100%;
        height: 57px;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
    }
`;

export const ArticleBtnRemove = styled.button`
    width: 225px;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #ffffff;
    margin-bottom: 10px;
    &:hover {
        background-color: #0080c1;
    }

    @media ${device.tablet} {
        width: 225px;
    }
    @media ${device.mobile} {
        width: 100%;
        height: 57px;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
    }
`;
