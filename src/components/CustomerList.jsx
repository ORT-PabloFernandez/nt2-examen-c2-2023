import {useFetchCustomers} from "../hooks/useFetchCustomers";
import {Customer} from "./Customer";

export const CustomerList = () => {

    const customers = useFetchCustomers();

    return (
        <ul>
            <ul>
                {
                    customers.map((customer) => (
                        <Customer key={customer.id} {...customer} ></Customer>
                    ))
                }
            </ul>
        </ul>
    )
}
