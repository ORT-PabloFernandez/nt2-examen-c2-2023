import {Link} from "react-router-dom";
const Customer = (props) => {
  return (
    <li className="customer-item">
      <div className="card ">

          <h2>Nombre de usuario del cliente: {props.Username}</h2>
          <h2>Nombre del cliente: {props.Name}</h2>
          <h2>Cumpleanios del cliente: {props.Birth}</h2>
          <h2>Email del cliente: {props.Email}</h2>
       <div className="customer-item__info">  
          <h2>Cuentas que posee el cliente: {props.Accounts?.map((aco) => {
            return (
               <Link to={`accounts/${aco}`}>   
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