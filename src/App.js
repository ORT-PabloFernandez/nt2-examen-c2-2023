import Account from "./components/Account";
import CostumerPage from "./components/CustomerPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
	  <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route path="/customers" element={<CostumerPage />} />
          <Route path="/Account/:id" element={<Account />} />
          <Route path="/costumers" element={<h1>Hola!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
	);
}

export default App;
