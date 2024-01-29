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

export const SearchLogoLink = styled(NavLink)`
    @media ${device.mobile} {
        display: none;
    }
`;

export const SearchLogoImg = styled.img`
    width: 54px;
    height: auto;
`;

export const SearchLogoMobLink = styled(NavLink)`
    display: none;
    @media ${device.mobile} {
        display: block;
        width: 32px;
        height: 32px;
    }
`;

export const SearchLogoMobImg = styled.img`
    @media ${device.mobile} {
        width: 32px;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }
`;