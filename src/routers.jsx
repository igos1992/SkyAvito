import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Article from './pages/Article/Article';
import MyArticle from './pages/MyArticle/MyArticle';
import Profile from './pages/Profile/Profile';
import SellerProfile from './pages/SellerProfile/SellerProfile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
// import Addnewat from './components/PoPups/Addnewat/Addnewat';
// import Atclsettings from './components/PoPups/Atclsettings/Atclsettings';
// import Reviews from './components/PoPups/Reviews/Reviews';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';

import Layout from './components/Layout/Layout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/" element={<Layout />}>
                <Route path="article/:id" element={<Article />} />
                <Route index element={<Main />}></Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="myArticle" element={<MyArticle />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="sellerProfile" element={<SellerProfile />} />

                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
