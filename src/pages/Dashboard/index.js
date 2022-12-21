import { useContext, useState,useEffect } from "react";
import  {AuthContext} from '../../Contexts/auth';
import Title from "../../components/TItle";
import Header from "../../components/Header";
import  {FiInstagram, FiMessageSquare, FiSave } from "react-icons/fi"
import "./dash.css";
import {FiPlus,FiEdit} from "react-icons/fi"
import {FiSearch ,FiTrash} from "react-icons/fi"
import {FiEdit2} from "react-icons/fi"
import New from "../New";
import { Link} from "react-router-dom";
import firebase from "../../services/firebaseConnection";
import { format } from "date-fns";

export default function Dashboard(){
  
    const listRef =  firebase.firestore().collection('chamados').orderBy('created','desc')
    const [chamados,setChamados] = useState([1]);
    const[loadCustomers,setLoadCustomers]= useState(true);
    const [loadingMore,setLoadingMore]=useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
   const [lastDocs,setLastDocs] = useState();



    useEffect(()=>{
 
    loadChamados();
    
    return ()=>{

    }
},[]);

async function loadChamados(){
 
    await listRef.limit(5)
    .get()
    .then((snapshot)=>{
     
 uptadeState(snapshot)

    })
        .catch((err)=>{
         console.log('deu algum erro:',err);
        setLoadingMore(false);
    })
setLoadCustomers(false);

}


 async function uptadeState(snapshot){
  const isCollectionEmpty = snapshot.size === 0;

if(!isCollectionEmpty){
    let lista = [];
    snapshot.forEach((doc)=>{
        lista.push({
            id : doc.id,
            assunto : doc.data().assunto,
            cliente : doc.data().cliente,
            clienteId : doc.data().clienteId,
            created : doc.data().created,
            createdFormated : format(doc.data().created.toDate(),'dd/MM/yyyy'),
            status : doc.data().status,
            complemento : doc.data().complemento
        })
    })
const  lastDoc = snapshot.docs[snapshot.docs.length -1];

setChamados(chamados => [...chamados,...lista])
setLastDocs(lastDoc);

}else {
    setIsEmpty(true);
}
setLoadingMore(false);

 }



      return (
        <div>
            <Header/>
<div className="content">
          <Title name="Atendimento">
          <FiMessageSquare size={25}></FiMessageSquare>
            
          </Title>

          {chamados.length === 0 ? (

<div className="container dashboard">
            <span>Nenhuma chamado registrado...</span>
        
                <Link to="/new" className="new">
                <FiPlus size = {25} ></FiPlus>
                Novo Chamado
                </Link>
               
          </div>
          ) : (
             <>
             <Link to="/new" className="new">
                <FiPlus size = {25} ></FiPlus>
                Novo Chamado
                </Link>


                <table>
<thead>
    <tr>
        <th scope="col">Cliente</th>
        <th scope="col">Assunto</th>
        <th scope="col">Status</th>
        <th scope="col">Cadastro em</th>     
        <th scope="col">#</th>  
    </tr>
</thead>
<tbody>
{chamados.map((item,index)=>{
return(
           
    <tr>
        <td data-label="Cliente">{item.cliente}</td>
        <td data-label="Assunto">{item.assunto}</td>
        <td data-label="Status">
            <span className="badge" style={{backgroundColor: '#5cb85c'}}>{item.status}</span>
        </td>
        <td data-label="Cadastrado">{item.createdFormated}</td>
        <td data-label="#">
            <button className="action" style={{backgroundColor: '#3583f6'}}><FiSearch color="#FFF" size={17} ></FiSearch></button>
            <button className="action" style={{backgroundColor: '#F6a935'}}><FiEdit color="#FFF" size={17} ></FiEdit></button>
            <button className="action" style={{backgroundColor: '#940404'}}><FiTrash color="#FFF" size={17} ></FiTrash></button>

        </td>
    </tr>
    )
})}
</tbody>

                </table>
             </>

          )}
          

</div>

</div>

         
    )
          }
    