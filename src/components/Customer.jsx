import {Link} from "react-router-dom";

export const Customer = ({username, name, address, birthdate, email, accounts}) => {
    return (
        <>
            <li>
                <h2>Nombre: {name}</h2>
                <h4>Nombre de usuario: {username}</h4>
                <h4>Dirección: {address}</h4>
                <h4>Cumpleaños: {birthdate}</h4>
                <h4>Correo Electrónico: {email}</h4>
                <h4>Accounts: </h4>
                {
                    <ul>
                        {accounts.map(c => {
                            return(
                                <>
                                    <Link to={`/Account/${c}`}>
                                        <li>{c}</li>
                                    </Link>
                                </>)
                        })

                        }

                    </ul>

                }
            </li>
        </>
    )
}
