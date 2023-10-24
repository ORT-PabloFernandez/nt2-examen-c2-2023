import { useState, useEffect } from "react";
import useFetch from '../hooks/useFetch';
import CustomerList from '../components/customerList'

const Home = () => {
    const [pagination, setPagination] = useState(1);
    const url = "https://analyticsbackendort.azurewebsites.net/api/customers"
    const [data] = useFetch(`${url}?pageSize=10&page=${pagination}`);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        if (!data) { setCargando(true) }
        else { setCargando(false) }
      }, [data]);

    const backPage = () => {
        if (pagination > 1) {
            setPagination(pagination-1)
        }
    };

    const nextPage = () => setPagination(pagination+1);

    return (
        <div className="content-home">
            <h1>¡Bienvenidos!</h1>
            <h2>Este es el listado de clientes:</h2>
            {
                cargando ? (<h2>cargando....</h2>) :
                (<CustomerList listado={data} />)
            }
            <div className="content-buttons">
                <button
                    onClick={backPage}
                    disabled={pagination <= 1}
                >atrás</button>
                <button 
                    onClick={nextPage}
                >
                    siguiente
                </button>
            </div>
        </div>
    );
}

export default Home;