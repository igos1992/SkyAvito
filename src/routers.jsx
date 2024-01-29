import { Routes, Route } from 'react-router-dom';
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

import Layout from './components/Layout/Layout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route index element={<Main />}></Route>
                <Route path="article" element={<Article />} />
                <Route path="myArticle" element={<MyArticle />} />
                <Route path="profile" element={<Profile />} />
                <Route path="sellerProfile" element={<SellerProfile />} />

                {/* Модалки */}
                <Route path="addnewat" element={<Addnewat />} />
                <Route path="atclsettings" element={<Atclsettings />} />
                <Route path="reviews" element={<Reviews />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
