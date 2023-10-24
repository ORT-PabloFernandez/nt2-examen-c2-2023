import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerPage from './Components/Customer/customerPage'
import MovieDetails from "./Components/Customer/Account/account";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Parcial PNT II </h1>} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/accounts/:accounts" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
