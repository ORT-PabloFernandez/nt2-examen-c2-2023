import {Link} from "react-router-dom";

export const Customer = ({_id, username, name, address, birthdate, email, accounts}) => {

    return (
        <>
            <li key={_id} className={`col-4 p-4`}>
                <div className={'bg-secondary'}>
                    <h2 >Nombre: {name}</h2>
                    <div className={'bg-body-secondary'}>
                        <h4>Nombre de usuario: {username}</h4>
                        <h4>Dirección: {address}</h4>
                        <h4>Cumpleaños: {birthdate}</h4>
                        <h4>Correo Electrónico: {email}</h4>
                        <h4>Accounts: </h4>
                        {
                            <ul className={'list-unstyled text-decoration-none bg-dark-subtle list-group '}>
                                {accounts.map(c => {
                                    return (
                                        <>
                                            <Link to={`/Account/${c}`} className={'text-decoration-none'}>
                                                <li className={'list-group-item-info'} key={accounts.id}> <h4>{c}</h4> </li>
                                            </Link>
                                        </>)
                                })

                                }

                            </ul>

                        }
                    </div>
                </div>
            </li>
        </>
    )
}
