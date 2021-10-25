import {useState,createContext,useAuth} from 'react';

const AuthContext = createContext();

export default function AuthContextProvider(){

    
    const {authenticated,handleLogin,handleLogout,senha,setSenha,email,setEmail} = useAuth();

    return (
        <AuthContext.Provider value={{authenticated,handleLogin,handleLogout,setSenha,setEmail,senha,email}}>
            {children}
        </AuthContext.Provider>
    )

}

export {AuthContext,AuthContextProvider};
