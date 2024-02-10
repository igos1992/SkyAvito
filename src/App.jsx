import { useState } from 'react';
import AppRoutes from './routers';
import { UserContext } from './UserContext/UserContext';

function App() {
    const [user, setUser] = useState(
        JSON.parse(
            localStorage.getItem('user'))
            );
    const changingUserInformation = () => {
        setUser(localStorage.removeItem('user'));
        window.location.pathname = '/login';
    };
    // console.log(user);

    return (
        <UserContext.Provider
            value={{
                userData: user,
                changingUserInformation,
                changingUserData: setUser,
            }}
        >
            <AppRoutes />
        </UserContext.Provider>
    );
}

export default App;
