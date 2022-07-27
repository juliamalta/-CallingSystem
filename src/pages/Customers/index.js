
import Header from "../../components/Header";
import Title from "../../components/TItle";
import "./customers.css";
import  { FiUser} from "react-icons/fi"
export default function Customers(){

    return (
        <div>
            <Header/>
            <div className="content">
            <Title name="Cliente">
<FiUser size={25}></FiUser>
            </Title>
            </div>
           

        </div>
    )
}