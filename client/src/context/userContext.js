import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { createContext, useContext } from "react";
import { NEW_USER } from "../utils/mutations";
import { GET_USERS, GET_ME } from "../utils/queries";


const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext)
}


export const UserProvider = ({children}) => {

    const { loading, data: userData} = useQuery(GET_ME);
    console.log(userData);
    

    const [newUser, {err, userData: newUserData}] = useMutation(NEW_USER);


    return (
        <UserContext.Provider value={{newUser, userData, newUserData}}>
            {children}
        </UserContext.Provider>
    )
}