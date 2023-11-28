//import logo from './logo.svg';
//import './App.css';
//import { BrowserRouter, Route, Routes } from "react-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CostumerPage from './components/Costumer/CostumerPage';
import CostumerDetails from './components/Costumer/CostumerDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<h1>Bienvenidos/as</h1>} />
        <Route path = "/costumers" element = {<CostumerPage />} />
        <Route path = "/costumers/:id" element = {CostumerDetails}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;



