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

export const MainSearch = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 11px 0;
    max-width: 1178px;
    margin: 0 auto;
    padding: 31px 10px 0px;
    @media ${device.mobile} {
        width: 100%;
        height: 55px;
        background-color: #009ee4;
        -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        margin-bottom: 0px;
        padding: 11px 17px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3;
    }
`;

export const SearchForm = styled(NavLink)`
    margin-left: 60px;
    max-width: 1044px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    @media ${device.mobile} {
        margin-left: 10px;
        max-width: 1044px;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
`;

export const SearchText = styled.input`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: transparent;
    padding: 13px 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
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
        display: none;
    }
`;

export const SearchTextMob = styled.input`
    display: none;
    @media ${device.mobile} {
        display: inline-block;
        width: 100%;
        height: 32px;
        border: none;
        border-radius: 30px;
        background-color: #ffffff;
        padding: 5px 17px;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
        &::-webkit-input-placeholder {
            background-color: transparent;
            color: #b3b3b3;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
        &:-ms-input-placeholder {
            background-color: transparent;
            color: #b3b3b3;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
        &::-ms-input-placeholder {
            background-color: transparent;
            color: #b3b3b3;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
        &::placeholder {
            background-color: transparent;
            color: #b3b3b3;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
    }
`;

export const SearchBtn = styled.button`
    margin-left: 10px;
    width: 158px;
    height: 50px;
    background-color: #009ee4;
    border: 1px solid #009ee4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    &:hover {
        background-color: #0080c1;
    }
    @media ${device.mobile} {
        display: none;
    }
`;