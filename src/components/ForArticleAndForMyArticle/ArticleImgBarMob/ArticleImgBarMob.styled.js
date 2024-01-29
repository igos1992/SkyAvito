import { styled } from 'styled-components';

const size = {
    mobile: '768px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const ArticleImgBarMob = styled.div`
    display: none;
    @media ${device.mobile} {
        display: block;
        width: 68px;
        height: 8px;
        position: absolute;
        bottom: 20px;
        left: calc(50% - (68px / 2));
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
`;

export const ImgBarMobCircle = styled.div`
    background-color: #ffffff;
    &:active {
        background-color: #ffffff;
        @media ${device.mobile} {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 1px solid #ffffff;
        }
    }
`;