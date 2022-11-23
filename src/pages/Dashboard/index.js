import { useContext, useState } from "react";
import  {AuthContext} from '../../Contexts/auth';
import Title from "../../components/TItle";
import Header from "../../components/Header";
import  {FiMessageSquare, FiSave} from "react-icons/fi"
import "./dash.css";
import {FiPlus} from "react-icons/fi"
import {FiSearch} from "react-icons/fi"
import {FiEdit2} from "react-icons/fi"
import New from "../New";
import { Link} from "react-router-dom";

export default function Dashboard(){
  
    const [chamados,setChamados] = useState([]);
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
             </>

          )}
          

</div>

</div>

         
    )
}