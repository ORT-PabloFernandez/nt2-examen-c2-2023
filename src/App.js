import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CostumerPage from "./components/CostumerPage";
import Costumer from "./components/Costumer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Bienvenidos</h1>} />
        <Route path="/costumers" element={<CostumerPage />} />
        <Route path="/costumers/:id" element={<Costumer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
