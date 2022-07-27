import  { useState ,useContext} from "react";
import { AuthContext } from "../../Contexts/auth";
import firebase from "../../services/firebaseConnection";
import avatar from "../../assets/avatar.png";
import Header from "../../components/Header";
import Title from "../../components/TItle";
import "./profile.css";
import  { FiSettings, FiUpload} from "react-icons/fi"
import React from "react";
import { toast} from 'react-toastify'

export default function Profile(){

    const { user,signOut,setUser,storageUser } = useContext(AuthContext); 

const [nome ,setNome] = useState(user && user.nome);

const [email ,setEmail] = useState(user && user.email);
const [avatarUrl ,setAvatarUrl] = useState(user && user.avatarUrl);
const [imageAvatar, setImageAvatar]= useState(null);


//editar usuario

async function handleSave(e){
    e.preventDefault();

    if(imageAvatar === null && nome !== ''){
      await firebase.firestore().collection('user')
      .doc(user.uid)
      .update({
        nome: nome
      })
      .then(()=>{
        let data = {
          ...user,
          nome: nome
        };
        setUser(data);
        storageUser(data);
        toast.success('Dados Atualizados');
      })
      .catch(()=>{
        toast.success('Erro');
      })

    }
    

  }



    return (
        <div>
            <Header/>
         <div className="content">
            <Title name="Meu perfil">
<FiSettings size={25}></FiSettings>
            </Title>
         

         <div className="container">
            <form className="form-profile" onSubmit={handleSave}>
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
