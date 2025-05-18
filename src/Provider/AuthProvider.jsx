import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext=createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const[user,setUser]= useState();
    const [loading,setLoading]=useState(true);

        const createUser = (email,password)=>{
            setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }
        const signInUser = (email,password)=>{
            setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
          setLoading(true);
            return signInWithPopup(auth,googleProvider)
     };
     const signOutUser = ()=>{
        setLoading(true);
       return signOut(auth);
    }
       
       
        useEffect(() =>{
        const unSubscribe =onAuthStateChanged(auth, currentUser =>{
            
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
                unSubscribe();
        }

    },[])
    const authData = {
        user,
        loading,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        googleLogin,

    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;