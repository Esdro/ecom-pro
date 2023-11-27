import React, {useEffect, useState} from "react";
import {createContext} from "react";
import {createUsersDoc, onAuthStateChangedHandler} from "../utils/firebase/firbase.utils";


export const  UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHandler((user) => {
            console.log(user)
            if (user) {
                createUsersDoc(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);


    return <UserContext.Provider value={value} > {children} </UserContext.Provider>
}