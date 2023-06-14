import {useFetchCustomers} from "../hooks/useFetchCustomers";
import {Customer} from "./Customer";

export const CustomerList = () => {

    const customers = useFetchCustomers();

    return (
        <>
            <ul className={'row justify-content-center pt-5 list-unstyled text-center'}>
                {
                    customers.map((customer) => (
                        <Customer key={customer._id} {...customer} ></Customer>
                    ))
                }
            </ul>
        </>
    )
}
