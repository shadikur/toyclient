import React, { createContext, useState } from 'react';
import app from './../firebase/firebase.config';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

const AppContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState('');

    const contextData = {
        user
    }

    return (
        <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
    );
};

export default ContextProvider;