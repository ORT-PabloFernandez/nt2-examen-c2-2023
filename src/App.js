import { BrowserRouter, Route, Routes } from "react-router-dom";
import CostumerPage from "./components/CostumerPage";
import Account from "./components/Account";
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/customers" element={<CostumerPage />} />
          <Route path="/Account/:id" element={<Account />} />
          <Route path="/costumers" element={<h1>Holiis!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
