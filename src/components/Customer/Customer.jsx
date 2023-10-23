import { Link } from "react-router-dom";

const Customer = (props) => {
    console.log(props.accounts);
	return (
		<div>
			<ul key={props._id}>
				<li>_id: {props._id}</li>
				<li>username: {props.username}</li>
				<li>name: {props.name}</li>
				<li>address: {props.address}</li>
				<li>birthdate: {props.birthdate}</li>
				<li>email: {props.email}</li>
				<li>
					accounts:
					<ol>
						{props.accounts.map((account) => {
							return (
								<li key={account._id}>
									<Link to={`/accounts/${account._id}`}>Cuenta {account.account_id}</Link>
								</li>
							);
						})}
					</ol>
				</li>
			</ul>
		</div>
	);
};

export default Customer;
