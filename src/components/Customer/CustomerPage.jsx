import CustomerList from "./CustomerList";
import { useState, useEffect } from "react";

const CustomerPage = (props) => {
	return (
		<div className="container">
			<h1>Customer page</h1>
            <CustomerList />
		</div>
	);
};

export default CustomerPage;
