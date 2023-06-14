import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Home from './Componentes/Home.js';
import Customer from './Componentes/Customer.js'
import Account from './Componentes/Account.js'

function App() {
  const [customers, setcustomers]= useState([])
  const getCustomers = async () =>{
    const resp =await axios.get("https://tp2-analytics.azurewebsites.net/api/customers")
    console.log(resp.data);
     setcustomers(resp.data) 
  }

  useEffect(()=>{
    getCustomers()
  },[])

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home customers={customers}/>}/>
      <Route path='/:id' element={<Customer/>}/>
      <Route path='/account/:id' element={<Account/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
