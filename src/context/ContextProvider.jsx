import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";

export const AppContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const GoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const offLoad = onAuthStateChanged(auth, (currentlyLogged) => {
            setUser(currentlyLogged);
            setLoading(false);
        });

        return () => {
            offLoad();
        };
    }, []);

    const profileUpdate = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL,
        });
    };

    const mapAuthCodeToMessage = (authCode) => {
        switch (authCode) {
            case "auth/invalid-password":
                return "Password provided is not corrected";
            case "auth/invalid-email":
                return "Email provided is invalid";
            case "auth/weak-password":
                return "Weak password (Min. 6 Chars Required)";
            case "auth/email-already-in-use":
                return "Email already in use!"
            case "auth/user-not-found":
                return "Account does not exist! Please signup."
            case "auth/wrong-password":
                return "Wrong password!"
            default:
                return "Something wrong! Please try again.";
        }
    }


    const contextData = {
        user,
        loading,
        setLoading,
        signIn,
        signUp,
        GoogleSignIn,
        logOut,
        mapAuthCodeToMessage,
        profileUpdate
    }

    return (
        <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
    );
};

export default ContextProvider;