import { Link } from "react-router-dom";

const Customer = (props) => {
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
								<li key={account}>
									<Link to={`/accounts/${account}`}>Cuenta {account}</Link>
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
