import { useState ,useContext} from 'react';
import React from "react";
import logo from '../../assets/logo.png';

import { Link} from "react-router-dom";
import './singup.css';
import { AuthContext } from '../../Contexts/auth';



function SignUp() {
    const [email,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [ nome ,setNome ] =useState('');


const { signUp ,loadingAuth} = useContext(AuthContext);



    function handleSubmit(e){
        e.preventDefault();
       if ( nome !=='' &&  email!=='' && password !==''){
        signUp(email,password,nome)
       }


    }
  return (
    <div className="container-center">
        <div className="telaCadastro">
 <div className="cadastro-area">
    <img src={logo} alt="sistema cadastro"/>
    </div>

    <form onSubmit={handleSubmit} className="Cadastro">
        <h1>Cadastrar uma conta</h1>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) =>setNome(e.target.value)}/>
        <input type="text" placeholder="email@email.com" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <input type="password" placeholder="******" value={password} onChange={(e) =>setPassword(e.target.value)}/>
     
        <button type="submit"> { loadingAuth ? 'Carregando....' :'Cadastrar'} </button>
    </form>
 
    <Link to="/">Ja possuo uma conta!</Link>

        </div>
     
    </div>
  );
}

export default SignUp;
