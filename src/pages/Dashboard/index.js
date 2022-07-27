import { useContext } from "react";
import  {AuthContext} from '../../Contexts/auth';
import Title from "../../components/TItle";
import Header from "../../components/Header";
import  {FiMessageSquare} from "react-icons/fi"


export default function Dashboard(){
    const { signOut } = useContext(AuthContext); 
    return (
        <div>
            <Header/>
<div className="content">
          <Title name="Atendimento">
          <FiMessageSquare size={25}></FiMessageSquare>
            
          </Title>
          </div>
            <button onClick={()=> signOut ()}>Fazer Logout</button>
        </div>
    )
}