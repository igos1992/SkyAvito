import { styled } from 'styled-components';

const size = {
    mobile: '768px',
 
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};


export const MainContent = styled.div`
    max-width: 792px;
    width: 100%;
    padding: 0 5px 117px;
    @media ${device.mobile} {
        width: 100%;
        margin: 0 auto;
        padding: 0 0 84px;
    }
`;

export const MainText = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`;