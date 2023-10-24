import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-dom"
import CostumerList from './components/Costumer/CostumerList';
import UserPage from './components/Costumer/UserPage';
import { BrowserRouter, Route, Routes } from 'react-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/costumers" element={<CostumerPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
//App.js: agregue la segunda function App() con la route porque no entendí si la primera
//no se si había que considerarla para el ruteo. 