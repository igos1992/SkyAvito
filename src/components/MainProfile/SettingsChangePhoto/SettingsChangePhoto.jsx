// import { useState, useRef } from 'react';
// import { useUploadAnAvatarForTheUserMutation } from '../../../redux/RequestsWithAds/serviceQuery';
// import * as S from './SettingsChangePhoto.styled';
// import SettingsImg from '../SettingsImg/SettingsImg';

// function SettingsChangePhoto() {
//     const [uploadAvatarForUser] = useUploadAnAvatarForTheUserMutation();
//     const filePicker = useRef(null);
//     const [selectedFile, setSelectedFile] = useState();
//     const [upload, setUpload] = useState();

//     console.log(upload);

//     console.log(selectedFile);

//     const handleAvatar = (event) => {
//         // event.preventDefault();
//         console.log(event.target.files);
//         setSelectedFile(event.target.files?.[0]);
//         // const file = event.target.files?.[0];
//         // if (file) {
//         //     const formData = new FormData();
//         //     if (file) {
//         //         formData.append('file', file);
//         //         console.log(file);
//         //         uploadAvatarForUser(formData).then((data) => console.log(data));
//         //     }
//         // }
//     };

//     const handleUpload = async () => {
//         if (!selectedFile) {
//             console.log('Файл не загружен');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('selectedFile', selectedFile);
//         uploadAvatarForUser(formData).then((data) => setUpload(data));
//     };

//     const handlePick = () => {
//         filePicker.current.click();
//         // if (!selectedFile) {
//         //     console.log('Файл не загружен');
//         //     return;
//         // }

//         // const formData = new FormData();
//         // formData.append('selectedFile', selectedFile);
//         // uploadAvatarForUser(formData).then((data) => setUpload(data));
//     };

//     return (
//         <>
//             <SettingsImg upload={upload}/>
//             <S.UploadFileInput
//                 type="file"
//                 id="upload-file__input_1"
//                 ref={filePicker}
//                 className="upload-file__input"
//                 accept="image/*, .jpg, .jpeg, .png, web"
//                 onChange={handleAvatar}
//             />
//             {/* <S.UploadFileLabel
//                 className="upload-file__label"
//                 htmlFor="upload-file__input_1"
//             > */}
//             <S.UploadFileButton
//                 type="submit"
//                 className="upload-file__button"
//                 // onClick={() =>
//                 //     document.getElementById('upload-file__input_1')?.click()
//                 // }
//                 onClick={handlePick}
//             >
//                 Заменить фото
//             </S.UploadFileButton>

//             {/* </S.UploadFileLabel> */}
//         </>
//     );
// }

// export default SettingsChangePhoto;
