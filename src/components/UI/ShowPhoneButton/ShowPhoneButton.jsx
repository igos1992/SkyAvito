import * as S from './ShowPhoneButton.styled';

function ShowPhoneButton() {
    return (
        <S.ShowPhoneButton className="article__btn btn-hov02">
            Показать&nbsp;телефон
            <S.ShowPhoneButtonSpan className="article-span">
                8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
            </S.ShowPhoneButtonSpan>
        </S.ShowPhoneButton>
    );
}

export default ShowPhoneButton;
