const DetalleAccount = (props) => {
    const maxLimit = 10000;

    const { actCustomer } = props;
    const checkLimit = () => {
        if (maxLimit < actCustomer.limit) {
            return(<span className="limites-inferiores">limites inferiores a 10000</span>)
        }
    }

    return(
        <>
            <h2>Detalle de la cuenta: </h2>
            {checkLimit()}
            <p>{actCustomer.limit}</p>
            <ul>
                {actCustomer.products.map(e => <li key={e}>{e}</li>)}
            </ul>
        </>)
}

export default DetalleAccount;
