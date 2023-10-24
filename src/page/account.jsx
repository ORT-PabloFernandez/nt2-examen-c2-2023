import { useState, useEffect } from "react";
import useFetch from '../hooks/useFetch';
import { useParams } from "react-router-dom";
import DetalleAccount from '../components/detalleAccount';

const Account = () => {
    const { id } = useParams();

    const url = "https://analyticsbackendort.azurewebsites.net/api/accounts"
    const [data] = useFetch(`${url}`);

    const [cargando, setCargando] = useState(true);
    const [actCustomer, setCustomer] = useState(null);

    useEffect(() => {
        if (!data) {
            setCargando(true);
        }
        else {
            setCargando(false)
            setCustomer(data.find(account => account.account_id == id))
            console.log("actCustomer", actCustomer);
        }
    }, [data]);

    return(
        <div className="account-content">
            {cargando ? (<span>cargando....</span>) : (<DetalleAccount actCustomer={actCustomer} />)}
        </div>
    )
}

export default Account;