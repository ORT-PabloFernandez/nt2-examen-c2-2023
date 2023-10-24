import { Routes,Route,BrowserRouter} from "react-router-dom"; 
import './App.css';
import ClientesPage from "./components/clientPage";
import DetallesCliente from "./components/detallesCliente";
import AccountPage from "./components/AccountPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<ClientesPage/>}/>
          <Route path = "/cliente/:id" element = {<DetallesCliente/>}></Route>
          <Route path = "/account/:account_id" element = {<AccountPage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
