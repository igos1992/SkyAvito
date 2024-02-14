import { useSelector } from 'react-redux';
import { selectAddingImages } from '../../../../redux/RequestsWithAds/adsSlice';
import * as S from './FormNewArtBarImg.styled';

function FormNewArtBarImg({ handleImages }) {
    const addingImages = useSelector(selectAddingImages);
    console.log(addingImages);
    return (
        <S.FormNewArtBarImg className="form-newArt__bar-img">
            <S.FormNewArtImg className="form-newArt__img">
                <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    id="input"
                    type="file"
                    onChange={handleImages}
                    accept=".jpg, .jpeg, .png,"
                />
                {addingImages[0] ? (
                    <S.FormNewArtImgImg src={addingImages[0]} alt="" />
                ) : (
                    <S.Label htmlFor="input" />
                )}
            </S.FormNewArtImg>

            <S.FormNewArtImg className="form-newArt__img">
                <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    id="input1"
                    type="file"
                    onChange={handleImages}
                    accept=".jpg, .jpeg, .png,"
                />
                {addingImages[1] ? (
                    <S.FormNewArtImgImg src={addingImages[1]} alt="" />
                ) : (
                    <S.Label htmlFor="input1" />
                )}
            </S.FormNewArtImg>
            <S.FormNewArtImg className="form-newArt__img">
                <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    id="input2"
                    type="file"
                    onChange={handleImages}
                    accept=".jpg, .jpeg, .png,"
                />
                {addingImages[2] ? (
                    <S.FormNewArtImgImg src={addingImages[2]} alt="" />
                ) : (
                    <S.Label htmlFor="input2" />
                )}
            </S.FormNewArtImg>
            <S.FormNewArtImg className="form-newArt__img">
                <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    id="input3"
                    type="file"
                    onChange={handleImages}
                    accept=".jpg, .jpeg, .png,"
                />
                {addingImages[3] ? (
                    <S.FormNewArtImgImg src={addingImages[3]} alt="" />
                ) : (
                    <S.Label htmlFor="input3" />
                )}
            </S.FormNewArtImg>
            <S.FormNewArtImg className="form-newArt__img">
                <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    id="input4"
                    type="file"
                    onChange={handleImages}
                    accept=".jpg, .jpeg, .png,"
                />
                {addingImages[4] ? (
                    <S.FormNewArtImgImg src={addingImages[4]} alt="" />
                ) : (
                    <S.Label htmlFor="input4" />
                )}
            </S.FormNewArtImg>
        </S.FormNewArtBarImg>
    );
}

export default FormNewArtBarImg;
