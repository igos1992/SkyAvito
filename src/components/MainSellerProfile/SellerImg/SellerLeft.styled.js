import { styled } from 'styled-components';

const size = {
    mobile: '580px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const SellerLeft = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 50px;
    @media ${device.mobile} {
        display: none;
        margin-right: 0px;
    }
`;

export const SellerImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.mobile} {
        display: none;
    }
`;

export const SellerImgItem = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: fill;
    object-fit: fill;
    border-radius: 50%;
`;


