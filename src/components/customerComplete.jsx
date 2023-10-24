import { Link } from "react-router-dom";

const CustomerComplete = (props) => {
    const { customer } = props;

        return(
        <div className="content-customer-complete">
            <h2><u>Username</u>: {customer.username}</h2>
            <h3><u>Name</u>: {customer.name}</h3>
            <h4><u>Address</u>: {customer.address}</h4>
            <p><u>Birthdate</u>: {customer.birthdate}</p>
            <p><u>Email</u>: {customer.email}</p>
            {customer.accounts.map(e => (
                <Link key={e} to={`/account/${e}`}>
                    <p className="content-accounts">{`accounts: ${e}`}</p>
                </Link>
            ))}
        </div>
    )
}

export default CustomerComplete;
