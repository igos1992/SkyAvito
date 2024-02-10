import { styled } from 'styled-components';

export const UploadFileInput = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    width: 0.4px;
    height: 0.4px;
`;

export const UploadFileLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 240px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.25s ease;
`;

export const UploadFileButton = styled.button`
    margin-top: 10px;
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    color: #009ee4;
    transition: 0.25s ease;
`;
