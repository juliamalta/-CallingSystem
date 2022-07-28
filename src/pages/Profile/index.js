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


//previa imagem na tela 
function handlefile(e){

if(e.target.files[0]);
const image = e.target.files[0];

if (image.type === 'image/jpeg' || image.type === 'image/png' ){
  setImageAvatar(image);
  setAvatarUrl(URL.createObjectURL(e.target.files[0]))
 
}else{
  alert('Envie uma imagem do tipo PNG ou JPEG');
  setImageAvatar(null);
  return null;
 }


}

//upando imagem para firebasse

async function handleUpload(){
  const currentUid = user.uid;

  const uploadTask = await firebase.storage()
  .ref(`images/${currentUid}/${imageAvatar.name}`)
  .put(imageAvatar)
  .then( async () => {
    console.log('FOTO ENVIADA COM SUCESSO!');
 })



}



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
    else if ( nome !== '' && imageAvatar == null){
      handleUpload();
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

<input type="file" accept="image/*" onChange={handlefile}/> <br/>
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
