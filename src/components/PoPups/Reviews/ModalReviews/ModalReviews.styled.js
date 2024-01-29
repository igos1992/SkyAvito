import { css, styled } from 'styled-components';

const size = {
    mobile: '600px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const ModalReviews = styled.div`
    width: 100%;
    height: 495px;
`;

export const ReviewsReview = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 15px 0;
`;

export const ReviewItem = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;

export const ReviewLeft = styled.div`
    margin-right: 12px;
`;

export const ReviewImg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
`;

export const ReviewImgImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const ReviewRight = styled.div`
    display: block;
`;

export const FontT = css`
    font-size: 16px;
    line-height: 32px;
    color: #000000;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 28px;
        color: #000000;
    }
`;

export const ReviewName = styled.p`
    margin-bottom: 12px;
    font-weight: 600;
    ${FontT}
`;

export const ReviewNameSpan = styled.span`
    margin-left: 10px;
    color: #5f5f5f;
`;

export const ReviewTitle = styled.h5`
    font-weight: 600;
    ${FontT}
`;

export const ReviewText = styled.p`
    ${FontT}
`;
