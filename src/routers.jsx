import { Routes, Route } from 'react-router-dom';
// import { NotFound } from './pages/not-found/NotFound';
import Main from './pages/Main/Main';
import Article from './pages/Article/Article';
import MyArticle from './pages/MyArticle/MyArticle';
import Profile from './pages/Profile/Profile';
import SellerProfile from './pages/SellerProfile/SellerProfile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Addnewat from './components/PoPups/Addnewat/Addnewat';
import Atclsettings from './components/PoPups/Atclsettings/Atclsettings';
import Reviews from './components/PoPups/Reviews/Reviews';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/login" element={<AuthorizationLoginPage />} />
            <Route path="/RegistrationPage" element={<RegistrationPage />} />
            <Route element={<ProtectedRoute />}> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Main />}>
                {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            <Route path="article" element={<Article />} />
            <Route path="myArticle" element={<MyArticle />} />
            <Route path="profile" element={<Profile />} />
            <Route path="sellerProfile" element={<SellerProfile />} />
            {/* </Route> */}

            {/* Модалки */}
            <Route path="addnewat" element={<Addnewat />} />
            <Route path="atclsettings" element={<Atclsettings />} />
            <Route path="reviews" element={<Reviews />} />
            
        </Routes>
    );
};

export default AppRoutes;
