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
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    justify-content: center;
    @media ${device.mobile} {
        width: 132px;
        height: 132px;
    }
`;

export const SettingsImgItem = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: fill;
    object-fit: fill;
    border-radius: 50%;
`;

export const AvatarSpan = styled.span`
    color: #000000;
`;
