import './Customer.css';
import { Link } from 'react-router-dom';

const Customer = (props) =>{
    
   return (
        <li className='customer-item' >
            <div className='card customer-item__content'>
               <Link to={`/customers/${props.Id}`}>
                  <div className='customer-item__info'>
                     <h2>{props.UserName}</h2>
                     <h3>{props.Name}</h3>
                     <h3>{props.adress}</h3>
                     <h3>{props.birthdate}</h3>
                     <h3>{props.email}</h3>
                     <h3>{props.Accouts}</h3>
                  </div>
               </Link> 
            </div>
        </li>
     );
};

export default Customer;