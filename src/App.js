import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerPage from './Components/Customer/customerPage'
// import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/customers" element={<CustomerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
