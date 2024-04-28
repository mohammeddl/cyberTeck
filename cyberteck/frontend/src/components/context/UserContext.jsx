import { createContext, useContext, useState } from "react";
import UserApi from "../../services/api/Client/UserApi";

const UserStateContext = createContext({
    authenticated: false,
    user: {},
    setUser: () => {},
    logout: () => {},
    login: (email, password) => {},
    register: (image, name, email, password) => {},
    setAuthenticated: () => {},
});

export default function UserContext({ children }) {
    const [user, setUser] = useState(
        window.localStorage.getItem("USER")
            ? JSON.parse(window.localStorage.getItem("USER"))
            : {}
    );
    const [authenticated, _setAuthenticated] = useState(
        window.localStorage.getItem("ACCESS_TOKEN") ?  true : false
    );

    const login = async (email, password) => {
        const response = await UserApi.login(email, password);
        if (response.data.user) {
            setUser(response.data.user);
            window.localStorage.setItem(
                "ACCESS_TOKEN",
                response.data.access_token
            );
            window.localStorage.setItem(
                "USER",
                JSON.stringify(response.data.user)
            );
            _setAuthenticated(true);
        }
        return response;
    };

    const register = async (image, name, email, password) => {
        try {
            console.log("Attempting to register with:", {
                image,
                name,
                email,
                password,
            }); // Log the registration attempt

            await UserApi.getCsrfToken();
            _setAuthenticated(true);

            const response = await UserApi.register(
                image,
                name,
                email,
                password
            );

            console.log("API Response after registration:", response);

            if (response && response.data) {
                setUser(response.data.user);
                window.localStorage.setItem(
                    "ACCESS_TOKEN",
                    response.data.access_token
                );
                window.localStorage.setItem(
                    "USER",
                    JSON.stringify(response.data.user)
                );
            }

            return response;
        } catch (error) {
            console.log("Error during registration:", error); // Log any errors during registration
            return { error: error.message }; // Return the error message
        }
    };

    const logout = () => {
        _setAuthenticated(false);
        setUser({});
        window.localStorage.removeItem("AUTHENTICATED");
        window.localStorage.removeItem("USER");
        window.localStorage.removeItem("ACCESS_TOKEN");
    };

    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem("AUTHENTICATED", isAuthenticated);
    };

    return (
        <>
            <UserStateContext.Provider
                value={{
                    user,
                    login,
                    logout,
                    setUser,
                    authenticated,
                    setAuthenticated,
                    register,
                }}
            >
                {children}
            </UserStateContext.Provider>
        </>
    );
}

export const useUserContext = () => useContext(UserStateContext);
