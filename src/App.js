import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather  city="lviv"/>
        
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

export default App;
