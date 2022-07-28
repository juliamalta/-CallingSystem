import Title from "../../components/TItle";
import Header from "../../components/Header";
import { FiPlus} from "react-icons/fi";
import "./new.css";


export default function New(){

    return (
    <div>
    <Header/>

    <div className="content">
    <Title name="Novo Chamado">
<FiPlus size={25}></FiPlus>
    </Title>
    
<div className="cliente">
    <form className="form-chamado">
        <label>
        Cliente
    </label>
    <select name="cliente">
    </select>

    <label>
      Assunto
    </label>
    <select name="Assunto">
    
        </select>
        
        <label className="teste">Status </label>
        <input type="radio" name="status" value="Em aberto"/> Em aberto
        <input type="radio" name="status" value="Progresso"/>Progresso
        <input type="radio" name="status" value="Atendido"/>Atendido
        
    </form>
</div>
</div>

</div>

    )
}

