import Customer from "./Customer";

const CustomerList = (props) => {
	const replaceAccountsWithData = (customer) => {
		const updatedAccounts = customer.accounts.map((accountId) => {
			const matchedAccount = props.Accounts.find(
				(account) => account.account_id === accountId
			);
			return matchedAccount ? matchedAccount : accountId;
		});

		return {
			accounts: updatedAccounts,
		};
	};

	return (
		<ol>
			{props.Customers.map((customer) => {
				const updatedAccounts = replaceAccountsWithData(customer);

				return (
					<li className="mb-4" key={`customerli${customer._id}`}>
						<Customer                            
							_id={customer._id}
							username={customer.username}
							name={customer.name}
							address={customer.address}
							birthdate={customer.birthdate}
							email={customer.email}
							accounts={updatedAccounts.accounts}
						/>
					</li>
				);
			})}
		</ol>
	);
};

export default CustomerList;
