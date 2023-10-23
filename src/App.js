import Account from './components/Account/Account';
import CustomerPage from "./components/Customer/CustomerPage";
import CustomerDetails from "./components/Customer/CustomerDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1>Home</h1>} />{" "}
				<Route path="/customers" element={<CustomerPage />} />
				<Route path="/customers/:id" element={<CustomerDetails />} />
				<Route path="/accounts/:id" element={<Account />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
