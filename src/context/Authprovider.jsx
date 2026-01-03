import React, { useEffect, useState } from 'react';

import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthContext';

const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createUser =(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser =()=>{
        setLoading(true)
       return signOut(auth)
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const AuthInfo ={
        createUser,
        signInUser,
        user,
        loading,
        signInWithGoogle,
        signOutUser,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;