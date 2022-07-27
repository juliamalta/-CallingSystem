import  { useState ,useContext} from "react";
import { AuthContext } from "../../Contexts/auth";
 
import avatar from "../../assets/avatar.png";
import Header from "../../components/Header";
import Title from "../../components/TItle";
import "./profile.css";
import  { FiSettings, FiUpload} from "react-icons/fi"
import React from "react";

export default function Profile(){

    const { signOut } = useContext(AuthContext); 
const { user } = useContext(AuthContext);
const [nome ,setNome] = useState(user && user.nome);

const [email ,setEmail] = useState(user && user.email);
const [avatarUrl ,setAvatarUrl] = useState(user && user.avatarUrl);
    return (
        <div>
            <Header/>
         <div className="content">
            <Title name="Meu perfil">
<FiSettings size={25}></FiSettings>
            </Title>
         

         <div className="container">
            <form className="form-profile">
            <label className="label-avatar">
                <span>
                    <FiUpload color="FFF" size={25}/>
                    </span>

<input type="file" accept="image/*"/> <br/>
{ avatarUrl === null ? 
<img src={avatar} width="250" height="250" alt="foto perfil usuario"/>
:
<img src={avatarUrl} width="250" height="250" alt="foto perfil usuario"/>
}

</label>

<label>Nome:</label>
    <input type="text"  value={nome} onChange = { (e) => setNome (e.target.value)} />
<label>Email:</label>
    <input type="text"  value ={email} disabled= {true}/>

<button type="submit">Salvar</button>



        </form>
<div className="Sair">
        <button onClick={()=> signOut ()}>Sair</button>
        </div>
         </div>

         

        </div>
        </div>
    
    )
}