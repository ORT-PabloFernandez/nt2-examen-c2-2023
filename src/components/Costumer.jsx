import React from 'react';
import { Link } from 'react-router-dom';

const Costumer = (props) => {
    return(
        <div>
            <h1>ID Customer: {props.ID}</h1>
            <h2>Usuario: {props.Username}</h2>
            <h2>Nombre: {props.Name}</h2>
            <h2>Direccion: {props.Adress}</h2>
            <h2>Fecha Nacimiento: {props.Birthdate}</h2>
            <h2>Email: {props.Email}</h2>
            <h2>Cuentas: </h2>
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
