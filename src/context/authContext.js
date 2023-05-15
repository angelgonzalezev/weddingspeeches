import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
   const context =  useContext(authContext);

   if(!context){
    throw new Error('There is no auth provider')
   }
   return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
    }, []);
    return (
        <authContext.Provider value={{user, loading}}>
            {children}
        </authContext.Provider>
    )
}