import { styled } from 'styled-components';

const size = {
    mobile: '580px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const MainMenu = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 11px 0;
    width: 100%;
    padding: 31px 10px 64px;
    @media ${device.mobile} {
        display: none;
    }
`;
