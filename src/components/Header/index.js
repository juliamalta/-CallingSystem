import './header.css';
import { AuthContext } from '../../Contexts/auth';
import { useContext } from 'react';
import avatar from '../../assets/avatar.png';
import {FiHome,FiUser,FiSettings,FiLogOut} from "react-icons/fi";
import { Link} from "react-router-dom";


export default function Header () {
    const {user} = useContext(AuthContext);
    return (


        <div className='sidebar'>
        
<div>
    <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt ="foto avatar" />
  <p>{user.nome}</p>

</div>


<Link to ="/dashboard">
<FiHome color ="FFF" size={24}/>
Chamados
</Link>
<Link to="/customers">
<FiUser color ="FFF" size={24}/>
Clientes
</Link>
<Link to="/profile">
<FiSettings color  = "FFF" size= {24}/>
Configurações
</Link>
<Link to="/logout">
    <FiLogOut color = "FFF" size= {24}/>
    Logout
</Link>

        </div>



    )
}

