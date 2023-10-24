import CustomerComplete from '../components/customerComplete'
import CustomerSimple from '../components/customerSimple'

const Customer = (props) => {
    const { customer, complete } = props;

    return(
        <div>
            {complete ? <CustomerComplete customer={customer}/> : <CustomerSimple customer={customer}/>}
        </div>
    )
}

export default Customer;
