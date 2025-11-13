import React, { useEffect, useState } from 'react';

import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { AuthContext } from './AuthContext';

const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(null)

    const googleProvider = new GoogleAuthProvider();

    const createUser =(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
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
        signInWithGoogle

    }
    return (
        <AuthContext value={AuthInfo}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;