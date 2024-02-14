import { styled } from 'styled-components';

const size = {
    mobile: '768px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const ArticleImgItem = styled.div`
    width: 480px;
    height: 480px;
    background-color: #f0f0f0;
    margin: 0 5px;
    @media ${device.mobile} {
        width: 100%;
        min-width: 320px;
        height: auto;
        min-height: 320px;
        margin: 0 0px;
    }
`;

export const ArticleImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: fill;
    object-fit: fill;
`;
