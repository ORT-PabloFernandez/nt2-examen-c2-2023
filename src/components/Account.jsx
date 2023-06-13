import React from 'react';
import useFetchAccount from "../hooks/useFetchAccount";
import { useParams } from "react-router-dom";

export const Account =  () => {
    const { accountId } = useParams();
    const acc =  useFetchAccount(accountId);

    return (
        <div>
            <h1>{acc.limit}</h1>
            {Array.isArray(acc.products) && acc.products.length > 0 ? (
                acc.products.map((product) => (
                    <h2 key={product}>{product}</h2>
                ))
            ) : (
                <h1>Cargando..</h1>
            )}
        </div>
    );
};

