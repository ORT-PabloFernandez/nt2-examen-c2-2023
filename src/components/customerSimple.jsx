const CustomerSimple = (props) => {
    const { customer } = props;

    return(
        <div className="content-customer-simple">
            <h2><u>Username</u>: {customer.username}</h2>
            <h3><u>Username</u>: {customer.name}</h3>
        </div>
    )
}

export default CustomerSimple;