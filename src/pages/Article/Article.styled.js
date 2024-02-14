import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const size = {
    mobile: '768px',
    tablet: '890px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
};

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
    @keyframes wave-lines {
        0% {
            background-position: -468px 0;
        }
         100% {
            background-position: 468px 0;
        }
     }
     @keyframes wave-squares {
        0% {
            background-position: -468px 0;
        }
         100% {
            background-position: 468px 0;
        }
     }
`;

export const Box = styled.div`
    max-width: 300px;
    width: 100%;
    padding: 0 15px;
    @keyframes wave-lines {
        0% {
            background-position: -468px 0;
        }
         100% {
            background-position: 468px 0;
        }
     }
     @keyframes wave-squares {
        0% {
            background-position: -468px 0;
        }
         100% {
            background-position: 468px 0;
        }
     }
`;

export const Skeleton = styled.div`
    padding: 15px;
    max-width: 300px;
    width: 100%;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:
        0 3px 4px 0 rgba(0, 0, 0, 0.14),
        0 3px 3px -2px rgba(0, 0, 0, 0.2),
        0 1px 8px 0 rgba(0, 0, 0, 0.12);
    height: 80px;
    border-radius: 5px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(8%, rgba(130, 130, 130, 0.2)),
        color-stop(18%, rgba(130, 130, 130, 0.3)),
        color-stop(33%, rgba(130, 130, 130, 0.2))
    );
    background: linear-gradient(
        to right,
        rgba(130, 130, 130, 0.2) 8%,
        rgba(130, 130, 130, 0.3) 18%,
        rgba(130, 130, 130, 0.2) 33%
    );
    background-size: 800px 100px;
    animation: wave-squares 2s infinite ease-out;
    @keyframes wave-lines {
        0% {
            background-position: -468px 0;
        }
         100% {
            background-position: 468px 0;
        }
     }
     @keyframes wave-squares {
        0% {
            background-position: -468px 0;
        }
         100% {
            background-position: 468px 0;
        }
     }
`;

export const SkeletonSquare = styled.div`
    height: 80px;
    border-radius: 5px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(8%, rgba(130, 130, 130, 0.2)),
        color-stop(18%, rgba(130, 130, 130, 0.3)),
        color-stop(33%, rgba(130, 130, 130, 0.2))
    );
    background: linear-gradient(
        to right,
        rgba(130, 130, 130, 0.2) 8%,
        rgba(130, 130, 130, 0.3) 18%,
        rgba(130, 130, 130, 0.2) 33%
    );
    background-size: 800px 100px;
    animation: wave-squares 2s infinite ease-out;
    @keyframes wave-lines {
        0% {
            background-position: -468px 0;
        }
         100% {
            background-position: 468px 0;
        }
     }
     @keyframes wave-squares {
        0% {
            background-position: -468px 0;
        }
         100% {
            background-position: 468px 0;
        }
     }
`;

export const SkeletonRight = styled.div`
    flex: 1;
`;

export const SkeletonLeft = styled.div`
    flex: 2;
    padding-right: 15px;
`;

export const SkeletonRightFlex2 = styled.div`
    height: 12px;
    margin-bottom: 6px;
    border-radius: 2px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(8%, rgba(130, 130, 130, 0.2)),
        color-stop(18%, rgba(130, 130, 130, 0.3)),
        color-stop(33%, rgba(130, 130, 130, 0.2))
    );
    background: linear-gradient(
        to right,
        rgba(130, 130, 130, 0.2) 8%,
        rgba(130, 130, 130, 0.3) 18%,
        rgba(130, 130, 130, 0.2) 33%
    );
    background-size: 800px 100px;
    animation: wave-lines 2s infinite ease-out;
    
`;

// .h8{
//    height: 8px !important;
// }
// .h10{
//    height: 10px !important;
// }
// .h12{
//    height: 12px !important;
// }
// .h15{
//    height: 15px !important;
// }
// .h17{
//    height: 17px !important;
// }
// .h20{
//    height: 20px !important;
// }
// .h25{
//    height: 25px !important;
// }
// .w25{
//    width: 25% !important
// }
// .w40{
//    width:40% !important;
// }
// .w50{
//    width: 50% !important
// }
// .w75{
//    width: 75% !important
// }
// .m10{
//    margin-bottom: 10px !important;
// }

export const Main = styled.main`
    margin: 0 auto;
`;

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 5px;
    @media ${device.mobile} {
        padding: 0 20px 0;
    }
`;

export const MenuLogoLink = styled(NavLink)`
    width: 54;
    height: 50px;
`;

export const MenuLogoImg = styled.img`
    width: 54px;
    height: auto;
`;

export const MainArtic = styled.div`
    max-width: 1178px;
    padding: 0 0 70px;
    margin: 0 auto;
    padding: 0 5px 70px;
    @media ${device.mobile} {
        max-width: 1178px;
        width: 100%;
        padding: 55px 0 0px;
        margin: 0 auto;
    }
`;

export const ArticContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    @media ${device.mobile} {
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
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
`;

export const ArticleLeft = styled.div`
    max-width: 480px;
    margin-right: 54px;

    @media ${device.tablet} {
        width: 100%;
        min-width: 320px;
        background-color: #ffffff;
    }
    @media ${device.mobile} {
        max-width: 100%;
        width: 100%;
        min-width: 320px;
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
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

export const ArticleFillImg = styled.div`
    width: 100%;
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
    @media ${device.mobile} {
        max-width: 100%;
        width: 100%;
        overflow: hidden;
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
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        position: relative;
        &::before {
            content: "";
            display: block;
            width: 23px;
            height: 23px;
            background-color: transparent;
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
            position: absolute;
            top: 24px;
            left: 32px;
            cursor: pointer;
    }
`;

export const ArticleImgBarItem = styled.div`
    display: flex;
`;

export const ArticleRight = styled.div`
    max-width: 621px;
    @media ${device.mobile} {
        max-width: 100%;
        width: 100%;
        padding: 0 20px;
    }
`;

export const MainTitle = styled.h3`
    margin-bottom: 32px;
    padding: 0 5px;
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    @media ${device.mobile} {
        margin-bottom: 14px;
        padding: 0;
        font-size: 18px;
        line-height: 1;
    }
`;
