import { styled } from 'styled-components';

const size = {
    mobile: '580px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const SellerRight = styled.div`
    width: auto;
    @media ${device.mobile} {
        width: 100%;
    }
`;

export const SellerTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    color: #000000;
    margin-bottom: 0px;
    @media ${device.mobile} {
        font-size: 20px;
        line-height: 26px;
        margin-bottom: 6px;
    }
`;

export const SellerCity = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 10px;
    @media ${device.mobile} {
        font-size: 16px;
        line-height: 21px;
        color: #5f5f5f;
        margin-bottom: 6px;
    }
`;

export const SellerInfo = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 10px;
    @media ${device.mobile} {
        font-size: 16px;
        line-height: 21px;
        color: #5f5f5f;
        margin-bottom: 6px;
    }
`;

export const SellerImgMobBlock = styled.div`
    display: none;
    @media ${device.mobile} {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 20px 0;
    }
`;

export const SellerImgMobItem = styled.img`
    @media ${device.mobile} {
        width: 100%;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }
`;

export const SellerImgMob = styled.div`
    @media ${device.mobile} {
        display: block;
        width: 132px;
        height: 132px;
        border-radius: 50%;
        background-color: #f0f0f0;
    }
`;
