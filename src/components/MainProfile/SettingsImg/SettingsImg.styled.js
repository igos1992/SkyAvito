import { styled } from 'styled-components';

const size = {
    mobile: '620px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const SettingsImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #f0f0f0;
    @media ${device.mobile} {
        width: 132px;
        height: 132px;
    }
`;

export const SettingsImgItem = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`;
