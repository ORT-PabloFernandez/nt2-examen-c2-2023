import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Costumers from "./components/Costumers.js";
import Costumer from "./components/Costumer.js";
import Accounts from "./components/Accounts.js";

function App() {
  const [costumers, setCostumers] = useState([]);
  const [accounts, setAccounts] = useState([]);

  const getCostumers = async () => {
    const resp = await axios.get(
      "http://tp2-analytics.azurewebsites.net/api/customers"
    );
    console.log(resp.data);
    setCostumers(resp.data);
  };

  const getAccounts = async () => {
    const resp = await axios.get(
      "http://tp2-analytics.azurewebsites.net/api/accounts"
    );
    setAccounts(resp.data);
  };

  useEffect(() => {
    getCostumers();
    //getAccounts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Costumers costumers={costumers} />} />
        <Route path="/id" element={<Costumer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
