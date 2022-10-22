import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext= createContext();
const auth= getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null);
    const[loading, setLoading]= useState(false)

    const googleProviderLogin=(provider)=>{
        return signInWithPopup(auth,provider);
    }

    const register =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password, )
    }
    
    const updateUserProfile=(profile)=>{
            return updateProfile(auth.currentUser, profile);
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    const verifyUser=()=>{
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
            

            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo= {
        user,
         register,
         login,
         logOut,
         googleProviderLogin, 
         loading,
         updateUserProfile,
         verifyUser,

        };

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;