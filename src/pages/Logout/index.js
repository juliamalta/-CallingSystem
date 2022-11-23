import Title from "../../components/TItle";
import Header from "../../components/Header";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../Contexts/auth";
import  { useContext} from "react";

import "./logout.css";
import React from "react";
export default function Logout(){

    const { signOut ,setUser} = useContext(AuthContext); 




return(
<div >

<Header/>
<div className="content">
<Title name="Logout">
<FiLogOut size={25}></FiLogOut>
    </Title>

    
    <div className="sair">
    <button onClick={()=> signOut ()}>Sair</button>
    </div>




</div>




</div>
)
}
