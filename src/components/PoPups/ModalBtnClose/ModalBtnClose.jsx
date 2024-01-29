import * as S from './ModalBtnClose.styled';

function ModalBtnClose() {
    return (
        <S.ModalBtnClose className="modal__btn-close">
            <S.ModalBtnCloseLine className="modal__btn-close-line" />
        </S.ModalBtnClose>
    );
}

export default ModalBtnClose;
