import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Firebase } from "../config/firebase";


const AuthUser = createContext();
const auth = getAuth(Firebase);
const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
    // console.log(user);
    const GoogleLogin = () => signInWithPopup(auth, provider);
    const loginEmail = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);
    const CreateUserEP = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);
    const logout = () => signOut(auth);
    const updateProfilePic = (name, photo) =>
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
    const verifyEmail = () => sendEmailVerification(auth.currentUser);
    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser.displayName);
            setLoading(false);
            setUser(currentUser);
        });
        return () => unsuscribe();
    }, []);
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        GoogleLogin,
        loginEmail,
        logout,
        updateProfilePic,
        CreateUserEP,
        verifyEmail,
        resetPassword,
    };
    return <AuthUser.Provider value={authInfo}>{children}</AuthUser.Provider>;
};
export default UserContext;

export const useFirebase = () => {
    const context = useContext(AuthUser);
    return context;
};
