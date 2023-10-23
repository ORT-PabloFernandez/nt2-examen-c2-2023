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
				<li>accounts: {JSON.stringify(props.accounts)}</li>
				<li>tier_and_details: {JSON.stringify(props.tier_and_details)}</li>
			</ul>
		</div>
	);
};

export default Customer;
