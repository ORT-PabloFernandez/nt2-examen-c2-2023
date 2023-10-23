import Customer from "./Customer";

const CustomerList = (props) => {
	return (
		<ol>
           {props.Customers.map((customer) => {
				return (
					<li key={customer._id} >
						<Customer
							_id={customer._id}
							username={customer.username}
							name={customer.name}
							address={customer.address}
							birthdate={customer.birthdate}
							email={customer.email}
							accounts={customer.accounts}
							tier_and_details={customer.tier_and_details}
						/>
					</li>
				);
			})}

		</ol>
	);
};

export default CustomerList;
