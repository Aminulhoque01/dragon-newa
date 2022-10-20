import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut}from 'firebase/auth'

import app from '../../firebase/firebase.config';


export const AuthContext= createContext();

const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    

    const providerLogin=(Provider)=>{
        signInWithPopup(auth, Provider);
    }

    const logOut=()=>{
        signOut(auth);
    }

    const register=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
        })

        return()=>{
            unSubscribe();
        }
    },[])


    const authInfo= {user,providerLogin,logOut, register, login};

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;