import logo from './logo.svg';
import { useEffect } from "react";
import './App.css';

function App() {

useEffect(() => {
  fetch("https://api.wmata.com/TrainPositions/TrainPositions?contentType=json", {
    method: 'GET',
    headers: {
      Host: 'api.wmata.com',
      api_key: 'e13626d03d8e4c03ac07f95541b3091b'
    }
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
})


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

export default App;
