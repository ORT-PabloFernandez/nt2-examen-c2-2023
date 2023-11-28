import "./App.css";
import Account from "./components/Account";
import Costumer from "./components/Costumer";
import CostumerList from "./components/CostumerList";
import CostumerPage from "./components/CostumerPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/costumers" element={<CostumerPage />} />
        <Route path="/costumers" element={<CostumerList />} />
        <Route path="/costumers/:id" element={<Costumer />} />
        <Route path="/Account/:id" element={<Account />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
