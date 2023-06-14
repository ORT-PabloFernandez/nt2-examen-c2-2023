import React from 'react';
import useFetchAccount from "../hooks/useFetchAccount";
import { useParams } from "react-router-dom";

export const Account =  () => {
    const { accountId } = useParams();
    const acc =  useFetchAccount(accountId);

    return (
        <div className={'row justify-content-center text-center pt-5 bg-dark-subtle'}>
            <h1>Limite de la cuenta:  {acc.limit}</h1>
            {Array.isArray(acc.products) && acc.products.length > 0 ? (
                acc.products.map((product) => (
                    <h2 key={product}>Producto: {product}</h2>
                ))
            ) : (
                <h1>Cargando..</h1>
            )}
        </div>
    );
};

