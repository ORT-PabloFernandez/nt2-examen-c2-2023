import ListaAccounts from "./clientAccounts";
import { Link } from "react-router-dom";

const Cliente = (props) =>{


    return(
        <div class = 'cliente'>
            <Link to = {`/cliente/${props.id}`}>{props.username}</Link>
            <div>{props.name}</div>
            <div>---------</div>
        </div>
        
    );
}
export default Cliente;