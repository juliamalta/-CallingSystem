import { useContext } from "react";
import  {AuthContext} from '../../Contexts/auth';

export default function Dashboard(){
    const { signOut } = useContext(AuthContext); 
    return (
        <div>
            <h1>Pagina Dashboard</h1>
            <button onClick={()=> signOut ()}>Fazer Logout</button>
        </div>
    )
}