import React, { useContext, useState, useEffect } from 'react';
import { auth, firestore } from '../firebase/config';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()

    const registrarse = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const ingresar = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut();
    }

    const validateRole = () => {
        return currentUser.email === "asodamvipopayan@gmail.com" ? "admin" : "asociado";
    }

    const restorePassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const validateDoc = (doc) => {
        return firestore.collection('asociados').where('documento', '==', doc).limit(1).get()
    }

    const updateUser = (uid, doc) => {
        return firestore.collection('asociados').doc(doc).update({
            usuario: uid
        });
    }

    const userData = () => {
        return firestore.collection('asociados').where("usuario", "==", currentUser.uid).limit(1).get();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                await firestore.collection('asociados').where('usuario', '==', user.uid).limit(1).get().then((querySnapshot) => {
                    if(querySnapshot.size){
                        user = {...user, ...querySnapshot.docs[0].data(), doc: querySnapshot.docs[0].id}
                    }
                })
            }

            setCurrentUser(user);
        })

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        registrarse,
        validateDoc,
        updateUser,
        ingresar,
        logout,
        restorePassword,
        validateRole,
        userData,
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}