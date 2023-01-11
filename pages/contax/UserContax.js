import { createContext, useContext, useState } from "react";

const AuthUser = createContext()

const UserContax = ({ children }) => {
    const [user, setUser] = useState('shakeeb')
    const auth = { user, setUser }
    return (
        <AuthUser.Provider value={auth}>
            {children}
        </AuthUser.Provider>
    );
}

export default UserContax;

export const useFirebase = () => {
    const contax = useContext(AuthUser)
    return contax;
}