import { styled } from 'styled-components';

const size = {
    mobile: '600px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
};

export const FormNewArtBarImg = styled.div`
    width: 500px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px;
    overflow: hidden;
    @media ${device.mobile} {
        width: 278px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: start;
        margin: 0px -5px 10px;
        overflow: hidden;
    }
`;

export const FormNewArtImg = styled.div`
    width: 90px;
    height: 90px;
    margin-right: 10px;
    position: relative;
    z-index: 0;
    top: 0;
    left: 0;
    background-color: #f0f0f0;
    &:after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #d9d9d9;
        top: 50%;
        right: calc(50% - (30px / 2));
    }
    &:before {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #d9d9d9;
        top: 50%;
        right: calc(50% - (30px / 2));
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    @media ${device.mobile} {
        display: block;
        width: 84px;
        min-width: 84px;
        height: 90px;
        background-color: #f0f0f0;
        margin: 0 5px;
    }
`;

export const FormNewArtImgImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: fill;
    object-fit: fill;
    z-index: 2;
    position: relative;
    @media ${device.mobile} {
        display: block;
        width: 100%;
        height: 100%;
        -o-object-fit: fill;
        object-fit: fill;
    }
`;

export const FormNewArtImgCover = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    width: 0.4px;
    height: 100px;
`;

export const Label = styled.label`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    z-index: 2;
`;
