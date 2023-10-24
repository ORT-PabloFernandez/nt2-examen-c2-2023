import { Link } from 'react-router-dom';
import './customer.css';

const Customer = (props) => {
    return (
        <li className='customer-item'>
            <div className='card customer-item__content'>
               <Link to={`/customer/${props.id}`}>
                  <div>
                  </div>
                  <div>
                     <h2>{props.username}</h2>
                     <h3>{props.name}</h3>
                     <h3>{props.adress}</h3>
                     <h3>{props.birthdate}</h3>
                     <h3>{props.email}</h3>
                     <h3>{props.account}</h3>
                  </div>
               </Link> 
            </div>
        </li>
     );
};
    
export default Customer;