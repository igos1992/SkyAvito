import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const size = {
    mobile: '768px',
    tablet: '890px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
};

export const ArticleBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const ArticleTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    @media ${device.mobile} {
        font-size: 18px;
        line-height: 1;
        margin-bottom: 10px;
    }
`;

export const ArticleInfo = styled.div`
    margin-bottom: 34px;
    @media ${device.mobile} {
        margin-bottom: 20px;
    }
`;

export const ArticleDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 17px;
        color: #5f5f5f;
        margin-bottom: 4px;
    }
`;

export const ArticleCity = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 17px;
        color: #5f5f5f;
        margin-bottom: 4px;
    }
`;

export const ArticleLink = styled.button`
    font-size: 16px;
    line-height: 21px;
    color: #009ee4;
    border: none;
    background-color: #ffffff;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 19px;
        color: #009ee4;
        border: none;
        background-color: #ffffff;
    }
`;

export const ArticlePrice = styled.p`
    font-size: 28px;
    line-height: 39px;
    font-weight: 700;
    margin-bottom: 20px;
    @media ${device.mobile} {
        font-size: 18px;
        line-height: 25px;
        font-weight: 700;
        margin-bottom: 20px;
    }
`;

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
        margin-right: 0;
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

export const ArticleAuthor = styled.div`
    margin-top: 34px;
    margin-bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    @media ${device.mobile} {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

export const AuthorImgItem = styled.div`
    width: 40px;
    height: 40px;
    background-color: #f0f0f0;
    border-radius: 50%;
`;

export const AuthorImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const AuthorCont = styled.div`
    margin-left: 12px;
`;

export const AuthorName = styled.p`
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #009ee4;
    @media ${device.mobile} {
        font-size: 18px;
        line-height: 23px;
        font-weight: 600;
    }
`;
export const AuthorNameLink = styled(NavLink)`
    color: #009ee4;
`;

export const AuthorAbout = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #5f5f5f;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 28px;
    }
`;
