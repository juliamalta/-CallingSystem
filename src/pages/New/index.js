import Title from "../../components/TItle";
import Header from "../../components/Header";
import { FiPlus} from "react-icons/fi";
import "./new.css";
import { useState ,useEffect,useContext} from 'react';
import { AuthContext } from "../../Contexts/auth";
import {toast} from 'react-toastify';

import firebase from '../../services/firebaseConnection';

export default function New(){
    const [customers, setCustomers] = useState([]);
    const[loadCustomers,setLoadCustomers]= useState(true);
    const[customerSelect , setcustomerSelect] = useState(0);
    const [assunto,setAssunto] = useState('Suporte');
    const [ status,setStatus] =useState('aberto');
    const [ complemento,setComplemento] = useState('');
     const {user}=useContext(AuthContext);

useEffect(()=>{
    async function loadCustomers(){
await  firebase.firestore().collection('customers')
.get()
.then((snapshot)=>{
    let lista = [] ;
    snapshot.forEach((doc)=> {
        lista.push({
            id: doc.id,
            nomeCliente : doc.data().nomeCliente
        })
    })
    if (lista.length ===  0){
        console.log("nehuma empressa encontrada");
        setCustomers([{id:'1' , nomeCliente:'Frela'}]);
        setLoadCustomers(false);
        return;
    }
    setCustomers(lista);
    setLoadCustomers(false);

})


.catch((error)=>{
    console.log("deu algum erro",error);
    setLoadCustomers(false);
    setCustomers([{id:'1' , nomeCliente:''}]);
})
    }
    loadCustomers();
},[]);


    //troca assunto
function handleChangeSelect(e){
  setAssunto(e.target.value);
  console.log(e.target.value);
    
}


async function handleRegistrer(e){
e.preventDefault();

await firebase.firestore().collection('chamados')
.add({
    created: new Date(),
    cliente : customers[customerSelect].nomeCliente,
    clienteId : customers[customerSelect].id,
    assunto: assunto,
    status : status,
    complemneto: complemento,
    userId: user.uid

})
.then(()=>{
    toast.success('Chamado criado com sucesso!');
    setComplemento('');
    setcustomerSelect(0);
})
.catch((err)=>{
toast.error('Ops erro ao registra')
    console.log(err);
})
}

//troca status
function handleOptionChange(e){
    setStatus(e.target.value);
    console.log(e.target.value);
}

//troca complemento
function handleChangeComplement(e){
    setComplemento(e.target.value);
    console.log(e.target.value);

}

function handleCustomersSelect(e){

    setcustomerSelect(e.target.value);
    console.log(e.target.value);
}
    return (
    <div>
    <Header/>

    <div className="content">
    <Title name="Novo Chamado">
<FiPlus size={25}></FiPlus>
    </Title>
    
<div className="cliente">
    <form className="form-chamado" onSubmit={handleRegistrer}>
        <label>Cliente:</label>
        {loadCustomers ? (
              <input type="text" disabled={true} value="Carregando clientes..." />
            ) : (
                <select value={customerSelect} onChange={handleCustomersSelect} >
                {customers.map((item,index) => {
                  return(
                    <option key={item.id} value={index} >
                      {item.nomeCliente}
                    </option>
                  )
                })}
              </select>
   )}
    <label>
      Assunto:
    </label>
    <select value={assunto} onChange={handleChangeSelect}>
        <option value="suporte">Suporte</option>
        <option value="Visita Tecnica">Visita Tecnica</option>
        <option value="Financeiro">Financeiro</option>
        </select>
      
        <div className="teste">Status:<br/>
        
        <input type="radio" name="radio" value="aberto" onChange={handleOptionChange} checked={status==='aberto'}/> Em aberto<br/>
        <input type="radio" name="radio" value="Progresso" onChange={handleOptionChange} checked={status==='Progresso'}/>Progresso<br/>
    <input type="radio" name="radio" value="Atendido" onChange={handleOptionChange} checked={status==='Atendido'}/>Atendido<br/>
    
        </div>
       
        <label>Complemento:</label>
            <textarea value={complemento} onChange={handleChangeComplement}
                type="text"
                placeholder="Descreva o chamado (opcional)."
            />
 
        <button className="botao" type="submit">Registrar Chamado</button>
        

    </form>
</div>
</div>

</div>

    )
}

