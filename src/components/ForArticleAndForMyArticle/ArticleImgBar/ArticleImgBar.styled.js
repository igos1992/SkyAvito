import { styled } from 'styled-components';

const size = {
    mobile: '768px',
    tablet: '890px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
};

export const ArticleImgBar = styled.div`
    margin-top: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
    overflow: hidden;
    margin-left: -5px;
    @media ${device.mobile} {
        display: none;
    }
`;

export const ArticleImgBarDiv = styled.div`
    width: 88px;
    min-width: 88px;
    height: 88px;
    background-color: #f0f0f0;
    border: 2px solid #f0f0f0;
    margin: 0 5px;
`;

export const ArticleImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: fill;
    object-fit: fill;
`;
