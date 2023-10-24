import { useState, useEffect } from "react";
import useFetch from '../hooks/useFetch';
import { useParams } from "react-router-dom";
import Customer from '../components/customer';

const Pagina = () => {
    const { id } = useParams();

    const url = "https://analyticsbackendort.azurewebsites.net/api/customers"
    const [data] = useFetch(`${url}/${id}`);

    const [cargando, setCargando] = useState(true);
    const [actCustomer, setCustomer] = useState(null);

    useEffect(() => {
        if (!data) { setCargando(true) }
        else {
            setCargando(false)
            setCustomer(data)
        }
        console.log("actCustomer", actCustomer);
    }, [data]);

    return(
        <div>
            {cargando ? (<span>cargando....</span>) : (<Customer customer={actCustomer} complete={true} />)}
        </div>
    )
}

export default Pagina;