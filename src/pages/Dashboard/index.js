import { useContext, useState } from "react";
import  {AuthContext} from '../../Contexts/auth';
import Title from "../../components/TItle";
import Header from "../../components/Header";
import  {FiMessageSquare, FiSave} from "react-icons/fi"
import "./dash.css";
import {FiPlus,FiEdit} from "react-icons/fi"
import {FiSearch} from "react-icons/fi"
import {FiEdit2} from "react-icons/fi"
import New from "../New";
import { Link} from "react-router-dom";

export default function Dashboard(){
  
    const [chamados,setChamados] = useState([1]);
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
    <tr>
        <td data-label="Cliente">Sujeito</td>
        <td data-label="Assunto">Sujeito</td>
        <td data-label="Status">
            <span className="badge" style={{backgroundColor: '#5cb85c'}}>Em aberto</span>
        </td>
        <td data-label="Cadastrado">20/06/2021</td>
        <td data-label="#">
            <button className="action" style={{backgroundColor: '#3583f6'}}><FiSearch color="#FFF" size={17} ></FiSearch></button>
            <button className="action" style={{backgroundColor: '#F6a935'}}><FiEdit color="#FFF" size={17} ></FiEdit></button>
        </td>
    </tr>
</tbody>

                </table>
             </>

          )}
          

</div>

</div>

         
    )
}