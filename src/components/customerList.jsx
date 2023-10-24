import { Link } from "react-router-dom";
import Customer from '../components/customer'

const CustomerList = (props) => {
    const { listado } = props;

    return (
        <>
            {listado.map(e => (
                <Link key={e._id} to={`/customer/${e._id}`}>
                    <Customer customer={e} complete={false}/>
                </Link>)
            )}
        </>
    );
}

export default CustomerList;