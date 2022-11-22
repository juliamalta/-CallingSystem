import { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/TItle";
import "./customers.css";
import  { FiUser} from "react-icons/fi";
import firebase from "../../services/firebaseConnection";
import { toast } from "react-toastify";

export default function Customers(){

    const [nomeCliente , setNomeCliente] = useState('');
    const [cnpj , setCnpj] = useState('');
    const [endereco , setEndereco] = useState('');
    
    async function handleSubmit(e){
        e.preventDefault();
      
        if (nomeCliente !=='' && cnpj !=='' && endereco !==""){
            await firebase.firestore().collection('customers')
            .add({ 
               nomeCliente : nomeCliente,
               cnpj : cnpj,
               endereco : endereco

            })
            .then(()=>{
                setNomeCliente ('');
                setCnpj ('');
                setEndereco('');
                toast.success("Empresa cadastrada com sucesso");

            }
            )
            .catch((error)=>{
                console.log("error")
             toast.error("Erro ao cadastrar");
            })
        }else
        {
            toast.error("Prencha todos os campos")
        }

    }

    return (
        <div>
            <Header/>
            <div className="content">
            <Title name="Novo Cliente">
<FiUser size={25}></FiUser>

            </Title>
            <div className="container">
            <form className="form-cliente" onSubmit={handleSubmit}>
<label>Nome do cliente:</label>
<input type="text" placeholder="Nome Cliente" value={nomeCliente} onChange={(e)=>setNomeCliente(e.target.value)}></input>
<label>CNPJ:</label>
<input type="text" placeholder="CNPJ" value={cnpj} onChange={(e)=>setCnpj(e.target.value)}></input>
<label>Endereço:</label>
<input type="text" placeholder="Endereço" value={endereco} onChange={(e)=>setEndereco(e.target.value)}></input>


<button type="submit">Salvar</button>
                </form>

</div>

            </div>
           

        </div>
    )
}