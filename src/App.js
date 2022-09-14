//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
const [cardNumber, setCardNumber] = useState("");
const [name, setName] = useState("");

const handleCardNumber = (e) => {
  e.preventDefault();
  setCardNumber(e.target.value);
  console.log(cardNumber);
}

const handleName = (e) => {
  e.preventDefault();
  setName(e.target.value);
  console.log(name);
}


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <form>
        <label>"card number"
        <input type="text" placeholder="card number"  onChange={handleCardNumber} value={cardNumber}></input>
        </label>
        
        <label>"card holder name"
        <input type="text" placeholder="card holder name" onChange={handleName} value={name}></input>
        </label>

            <div className="putInCard">
              <p>{cardNumber}</p>
              <p>{name}</p>
            </div>
      </form>

    </div>
  );
}

export default App;
