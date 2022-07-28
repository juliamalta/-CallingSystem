import { useContext } from "react";
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
    const { signOut } = useContext(AuthContext); 
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Header/>
<div className="content">
          <Title name="Atendimento">
          <FiMessageSquare size={25}></FiMessageSquare>
            
          </Title>
          
          <div className="newchamado">
            <button > 
                <Link to="/new">
                <FiPlus size = {25} ></FiPlus>
                Novo Chamado
                </Link>
                </button>
          </div>

<div className="tiposChamado">
    <table  className="tabela">
        <tr>
            <td>CLIENTE</td>
            <td>ASSUNTO</td>
            <td>STATUS</td>
            <td>CADASTRADO EM</td>
            <td>#</td>
        
            </tr>
            
            

            <tr>
        <td>Ralf</td>
        <td>Suporte</td>
        <td>Progesso</td>
        <td>18/01/2002</td>
        <td>
            <button ><FiSearch ></FiSearch></button>
            <button ><FiEdit2></FiEdit2></button>
        </td>
    </tr>
    </table>
</div>

<div className="buscar">

    <button>BUSCAR MAIS</button>
</div>


</div>

</div>

         
    )
}