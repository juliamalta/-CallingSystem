

import { useContext } from "react";
import { useState } from "react";
import './signin.css';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";
import { AuthContext } from '../../Contexts/auth';

function Signin() {

const [email,setEmail] = useState('');
const [password ,setPassword] = useState('');

const { signIn , loadingAuth} = useContext(AuthContext);

function handleSubmit(e){
    e.preventDefault();
    if (email!=='' && password !==''){

  signIn(email,password)
  
}
}


  return (
    <div className="container-center">
        <div className="login">
           <div className="login-area">
            <img src={logo } alt="sistema logo"/>
           </div>

           <form onSubmit={handleSubmit} className="Login">
            <h1>Entrar</h1>
            <input type="text" placeholder="email@email.com" value={email} onChange={(e) =>setEmail(e.target.value)}/>
            <input type="password" placeholder="*****" value={password} onChange={(e) =>setPassword(e.target.value)} />
            <button type="submit"> { loadingAuth ? 'Carregando....' :'Acessar'} </button>

            </form>
 <Link to="/register">Criar uma conta</Link>
        </div>
     
    </div>
  );
}

export default Signin;
