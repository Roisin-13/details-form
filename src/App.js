//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
const [cardNumber, setCardNumber] = useState("");
const [name, setName] = useState("");
//const [cardDetails, setCardDetails] = useState([]);
const [cardDetails, setCardDetails] = useState({cardNumber:"", name:""});

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

const handleSubmit = (e) => {
  e.preventDefault();
 const validateForm = () => {
  let number = document.getElementById("number").value;
  let name = document.getElementById("name").value;
  if (number == "" || name =="") {
    alert("form must be filled out");
    return false;
  } else {
    document.getElementById("justAForm").style.display = "none";
    // name = "";
    // number = "";
    document.getElementById("btn").style.display = "block";
    setCardDetails(card => ({
      ...card,
      cardNumber:cardNumber, name:name
   }));

  }
}
validateForm();
}

const handleClick = (e) => {
  // document.getElementById("justAForm").style.display = "block";
  // document.getElementById("number").value = "";
  // document.getElementById("name").value = "";
  window.location.reload(false);
}

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <form onSubmit={handleSubmit} id="justAForm">
        <label>"card number"
        <input type="text" placeholder="card number"  onChange={handleCardNumber} pattern="[0-9]{5}" value={cardNumber} id="number"></input>
        </label>

        <label>"card holder name"
        <input type="text" placeholder="card holder name" onChange={handleName} value={name} pattern="[A-Za-z ]{3,}" id="name"></input>
        </label>
<button type="submit">enter details</button>
            <div className="putInCard">
              <p>{cardNumber}</p>
              <p>{name}</p>
            </div>
      </form>
<div id="newCard">
  <p>{cardDetails.cardNumber}</p>
  <p>{cardDetails.name}</p>
  <button style={{display: "none"}} id="btn" onClick={handleClick}>start again</button>
</div>
    </div>
  );
}

export default App;
