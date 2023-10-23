import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Customer = (props) => {
	const { id } = useParams();
	const [account, setAccount] = useState([]);

	useEffect(() => {
		fetch(`https://analyticsbackendort.azurewebsites.net/api/accounts`)
			.then((response) => response.json())
			.then((data) => {
				setAccount(data.find((item) => item.account_id == id));
			})
			.catch((error) => console.log(error));
	}, []);

	console.log(account);

	return (
		<div>
			<ul key={account._id}>
				<li>limit: {account.limit}</li>
				<li>products: {JSON.stringify(account.products)}</li>
			</ul>
			<Link to={`/customers`}>Go Back</Link>
		</div>
	);
};

export default Customer;
