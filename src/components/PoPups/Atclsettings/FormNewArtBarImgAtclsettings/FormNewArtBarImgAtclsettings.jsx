import { useSelector } from 'react-redux';
import { selectAddingImagesAtclsettings } from '../../../../redux/selectedFile/selectedFile';
import * as S from './FormNewArtBarImgAtclsettings.styled';

function FormNewArtBarImgAtclsettings({ handleImages, dataAds }) {
    const addingImagesAtclsettings = useSelector(
        selectAddingImagesAtclsettings,
    );

    return (
        <S.FormNewArtBarImg className="form-newArt__bar-img">
            <S.FormNewArtImg className="form-newArt__img">
                <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    id="input"
                    type="file"
                    onChange={handleImages}
                    multiple
                    accept=".jpg, .jpeg, .png,"
                />
                {!addingImagesAtclsettings[0] && !dataAds?.images[0]?.url ? (
                    <S.Label htmlFor="input" />
                ) : (
                    <>
                        {addingImagesAtclsettings[0] ? (
                            <S.FormNewArtImgImg
                                src={addingImagesAtclsettings[0]}
                                alt=""
                            />
                        ) : (
                            <S.FormNewArtImgImg
                                src={`http://localhost:8090/${dataAds?.images[0]?.url}`}
                                alt=""
                            />
                        )}
                    </>
                )}
            </S.FormNewArtImg>

            <S.FormNewArtImg className="form-newArt__img">
                <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    id="input1"
                    type="file"
                    onChange={handleImages}
                    multiple
                    accept=".jpg, .jpeg, .png,"
                />
                {!addingImagesAtclsettings[1] && !dataAds?.images[1]?.url ? (
                    <S.Label htmlFor="input1" />
                ) : (
                    <>
                        {addingImagesAtclsettings[1] ? (
                            <S.FormNewArtImgImg
                                src={addingImagesAtclsettings[1]}
                                alt=""
                            />
                        ) : (
                            <S.FormNewArtImgImg
                                src={`http://localhost:8090/${dataAds?.images[1]?.url}`}
                                alt=""
                            />
                        )}
                    </>
                )}
            </S.FormNewArtImg>
            <S.FormNewArtImg className="form-newArt__img">
                <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    id="input2"
                    type="file"
                    onChange={handleImages}
                    multiple
                    accept=".jpg, .jpeg, .png,"
                />
                {!addingImagesAtclsettings[2] && !dataAds?.images[2]?.url ? (
                    <S.Label htmlFor="input2" />
                ) : (
                    <>
                        {addingImagesAtclsettings[2] ? (
                            <S.FormNewArtImgImg
                                src={addingImagesAtclsettings[2]}
                                alt=""
                            />
                        ) : (
                            <S.FormNewArtImgImg
                                src={`http://localhost:8090/${dataAds?.images[2]?.url}`}
                                alt=""
                            />
                        )}
                    </>
                )}
            </S.FormNewArtImg>
            <S.FormNewArtImg className="form-newArt__img">
                <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    id="input3"
                    type="file"
                    onChange={handleImages}
                    multiple
                    accept=".jpg, .jpeg, .png,"
                />
                {!addingImagesAtclsettings[3] && !dataAds?.images[3]?.url ? (
                    <S.Label htmlFor="input3" />
                ) : (
                    <>
                        {addingImagesAtclsettings[3] ? (
                            <S.FormNewArtImgImg
                                src={addingImagesAtclsettings[3]}
                                alt=""
                            />
                        ) : (
                            <S.FormNewArtImgImg
                                src={`http://localhost:8090/${dataAds?.images[3]?.url}`}
                                alt=""
                            />
                        )}
                    </>
                )}
            </S.FormNewArtImg>
            <S.FormNewArtImg className="form-newArt__img">
                <S.FormNewArtImgCover
                    className="form-newArt__img-cover"
                    id="input4"
                    type="file"
                    onChange={handleImages}
                    multiple
                    accept=".jpg, .jpeg, .png,"
                />
                {!addingImagesAtclsettings[4] && !dataAds?.images[4]?.url ? (
                    <S.Label htmlFor="input4" />
                ) : (
                    <>
                        {addingImagesAtclsettings[4] ? (
                            <S.FormNewArtImgImg
                                src={addingImagesAtclsettings[4]}
                                alt=""
                            />
                        ) : (
                            <S.FormNewArtImgImg
                                src={`http://localhost:8090/${dataAds?.images[4]?.url}`}
                                alt=""
                            />
                        )}
                    </>
                )}
            </S.FormNewArtImg>
        </S.FormNewArtBarImg>
    );
}

export default FormNewArtBarImgAtclsettings;
