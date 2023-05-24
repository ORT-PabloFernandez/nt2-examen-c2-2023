import { Link } from "react-router-dom";
import "./Customer.css";

const Customer = (props) => {
  
  return (
    
    <li className="user-item">
      
      <div className="card ">

          <h2>Nombre de usuario: {props.Username}</h2>
          <h2>Nombre: {props.Name}</h2>
          <h2>Cumple: {props.Birth}</h2>
          <h2>Email: {props.Email}</h2>
       <div className="user-item__info">  
          <h2>Cuentas que posee: {props.Accounts?.map((aco) => {
            return (
               <Link to={`accountDetails/${aco}`}>   
              <li>{aco}</li>
               </Link>
            )
          })}
          </h2>
        </div> 
       </div>

      
    </li>
     
  );
};

export default Customer;