import {useEffect, useState} from "react";
import {getAllCustomers} from "../helpers/getAllCustomers";

export const useFetchCustomers = () => {
    const [custumers, setCostumers] = useState([]);

    const getCustomers = async() => {
        const allCustomers = await getAllCustomers();
        setCostumers(allCustomers);
    }

    useEffect(() => {
        getCustomers();
    }, [])

    return custumers;
}
