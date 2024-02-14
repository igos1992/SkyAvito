import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Article from './pages/Article/Article';
import Profile from './pages/Profile/Profile';
import SellerProfile from './pages/SellerProfile/SellerProfile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';

import Layout from './components/Layout/Layout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/" element={<Layout />}>
                <Route path="article/:id" element={<Article />} />
                <Route
                    path="sellerProfile/:userId"
                    element={<SellerProfile />}
                />
                <Route index element={<Main />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
