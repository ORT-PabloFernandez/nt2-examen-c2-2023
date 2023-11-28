//import './App.css';

const Costumer = (props) => {
    return (
        <li>
            <div>
            <h2>{props.Username}</h2>
            <h2>{props.Name}</h2>
            <h2>{props.Birthdate}</h2>
            <h2>{props.Email}</h2>
            <h2>{props.Accounts}</h2>
            </div>
        </li>
    );
};
//..necesitamos crear un componente llamado **Customer** que muestre los siguientes datos del cliente:
//"username", "name", "address", "birthdate", "email", "accounts"
export default Costumer;



