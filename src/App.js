import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Account from "./components/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/:accountnumber" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
