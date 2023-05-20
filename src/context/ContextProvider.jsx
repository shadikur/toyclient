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
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);



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
            default:
                return "";
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
        mapAuthCodeToMessage
    }

    return (
        <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
    );
};

export default ContextProvider;