import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext=createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const[user,setUser]= useState();
    console.log(user)
        const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);

    }
        const signInUser = (email,password)=>{
       return signInWithEmailAndPassword(auth, email, password);
    }
     const signOutUser = ()=>{
       return signOut(auth);
    }
       
       
        useEffect(() =>{
        const unSubscribe =onAuthStateChanged(auth, currentUser =>{
            //console.log('current user inside',currentUser);
            setUser(currentUser);
        })
        return ()=>{
                unSubscribe();
        }

    },[])
    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
        signOutUser,

    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;