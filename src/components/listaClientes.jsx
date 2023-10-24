import Cliente from "./cliente";

const ListaClientes = (props) => {
    return(
        <ul>lista clientes:
            {props?.ListaClientes?.map(cliente => {
                return(
                    <Cliente 
                    id = {cliente["_id"]}
                    username= {cliente.username}
                    name = {cliente.name}
                    address = {cliente.address}
                    birthdate = {cliente.birthdate}
                    email = {cliente.email}
                    accounts = {cliente.accounts}
                    />
                )
            })}
        </ul>
    )
}
export default ListaClientes;