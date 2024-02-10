import * as S from './FormNewArtBarImg.styled';

function FormNewArtBarImg({ handlePick, filePicker, handleImages }) {
    return (
        <S.FormNewArtBarImg className="form-newArt__bar-img">
            <S.FormNewArtImg className="form-newArt__img" onClick={handlePick}>
                <S.FormNewArtImgImg src="" alt="" />
                {/* <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    ref={filePicker}
                    onChange={handleImages}
                    accept=".jpg, .jpeg, .png,"
                /> */}
            </S.FormNewArtImg>
            <S.FormNewArtImgCover
                className="form-newArt__img-cover"
                type="file"
                ref={filePicker}
                onChange={handleImages}
                multiple
                accept=".jpg, .jpeg, .png,"
            />
            <S.FormNewArtImg className="form-newArt__img" onClick={handlePick}>
                <S.FormNewArtImgImg src="" alt="" />
                {/* <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    ref={filePicker}
                    onChange={handleImages}
                    accept=".jpg, .jpeg, .png,"
                /> */}
            </S.FormNewArtImg>
            <S.FormNewArtImgCover
                className="form-newArt__img-cover"
                type="file"
                ref={filePicker}
                onChange={handleImages}
                accept=".jpg, .jpeg, .png,"
            />
            <S.FormNewArtImg className="form-newArt__img" onClick={handlePick}>
                {/* <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    ref={filePicker}
                    onChange={handleImages}
                    accept=".jpg, .jpeg, .png,"
                /> */}
                <S.FormNewArtImgImg src="" alt="" />
            </S.FormNewArtImg>
            <S.FormNewArtImgCover
                className="form-newArt__img-cover"
                type="file"
                ref={filePicker}
                onChange={handleImages}
                accept=".jpg, .jpeg, .png,"
            />
            <S.FormNewArtImg className="form-newArt__img" onClick={handlePick}>
                {/* <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    ref={filePicker}
                    onChange={handleImages}
                    accept=".jpg, .jpeg, .png,"
                /> */}
                <S.FormNewArtImgImg src="" alt="" />
            </S.FormNewArtImg>
            <S.FormNewArtImgCover
                className="form-newArt__img-cover"
                type="file"
                ref={filePicker}
                onChange={handleImages}
                accept=".jpg, .jpeg, .png,"
            />
            <S.FormNewArtImg className="form-newArt__img" onClick={handlePick}>
                {/* <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    ref={filePicker}
                    onChange={handleImages}
                    accept=".jpg, .jpeg, .png,"
                /> */}
                <S.FormNewArtImgImg src="" alt="" />
            </S.FormNewArtImg>
            <S.FormNewArtImgCover
                className="form-newArt__img-cover"
                type="file"
                ref={filePicker}
                onChange={handleImages}
                accept=".jpg, .jpeg, .png,"
            />
        </S.FormNewArtBarImg>
    );
}

export default FormNewArtBarImg;
