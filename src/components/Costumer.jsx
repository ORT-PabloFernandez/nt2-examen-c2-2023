import {Link} from "react-router-dom";

const Costumer = (props) => {
    return(
        <div>
            <h1>CostumerID: {props.ID}</h1>
            <h2>Username: {props.Username}</h2>
            <h2>Name: {props.Name}</h2>
            <h2>Adress: {props.Adress}</h2>
            <h2>Birthdate: {props.Birthdate}</h2>
            <h2>Email: {props.Email}</h2>
            <h2>Accounts: </h2>
            {props.Accounts.map((account) => {

                return(
                    <Link to = {`/Account/${account}`}>
                        <h3>{account}</h3>
                    </Link>
                );
            })}
        </div>
    );
}

export default Costumer;