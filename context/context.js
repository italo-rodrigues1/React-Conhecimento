import {useState,createContext} from 'react';
import useAuth from '../../hooks/useAuth';

//CRIANDO O CONTEXT 
const AuthContext = createContext();

export default function AuthContextProvider(){

//PEGANDO OS STATE E AS FUNTIONS DA PAGE USEAUTH
const {authenticated,handleLogin,handleLogout,senha,setSenha,email,setEmail} = useAuth();

return (

// UTILIZANDO O AUTHCONTEXT PARA PROVER OS VALORES PARA TODA A APLICAÇÃO QUE ESTÁ ENVOLVIDA PELO PROPRIO
<AuthContext.Provider value={{authenticated,handleLogin,handleLogout,setSenha,setEmail,senha,email}}>

    {children}

</AuthContext.Provider>

)

}

export {AuthContext,AuthContextProvider};