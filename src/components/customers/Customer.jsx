import { Link } from "react-router-dom"


const Customer = (props) =>{
    return(
        
        <li>
            <h1>{props.Username}</h1>
            <h2>Nombre: {props.Name}</h2>
            <h5>Direccion: {props.Address}</h5>
            <h5>Fecha de nacimiento: {props.Birthdate}</h5>
            <h5>Email: {props.Email}</h5>
            <h1>{props.Accounts.map(account =>{
                return(
                    <button><Link to={`/customers/account/${account}`} >{account}</Link></button>
                )
            })}
            </h1>       

        </li>
    )
}

export default Customer