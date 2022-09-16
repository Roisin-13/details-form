//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {ReactComponent as Logo} from './images/card-logo.svg';
import {ReactComponent as Complete} from './images/icon-complete.svg';

const validateForm = (name, number, cvv) => {
  if (number == "" || name =="" || cvv =="") {
    return false;
  }
    return true;
  
}

function App() {
const [cardNumber, setCardNumber] = useState("");
const [name, setName] = useState("");
const [cvv, setCvv] = useState("");
//const [cardDetails, setCardDetails] = useState([]);
const [cardDetails, setCardDetails] = useState({cardNumber:"", name:"", cvv:""});

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

const handleCvv = (e) => {
  e.preventDefault();
  setCvv(e.target.value);
  console.log(cvv);
}

const handleSubmit = (e) => {
  e.preventDefault();
let number = document.getElementById("number").value;
let name = document.getElementById("name").value;
let cvv = document.getElementById("cvv").value;
const isValid = validateForm(name, number, cvv);
  if (!isValid) {
    alert("form must be filled out"); 
  }
  if (isValid) {
    document.getElementById("justAForm").style.display = "none";
    document.getElementById("formComplete").style.display = "block";
    document.getElementById("btn").style.display = "block";
    document.getElementById("newCard").style.display = "block";
    document.getElementById("newCardBack").style.display = "block";
    setCardDetails(card => ({
      ...card,
      cardNumber:cardNumber, name:name, cvv:cvv
    }));
  }
}

const handleClick = (e) => {
  window.location.reload(false);
}

  return (
    <div className="App">
      <form onSubmit={handleSubmit} id="justAForm">
          <div className="formCont">
            <label>card number
              <input type="text" placeholder="e.g. 1234 5678"  onChange={handleCardNumber} pattern="[0-9]{8}" value={cardNumber} id="number"></input>
            </label>
            <label>card holder name 
              <input type="text" placeholder="e.g. Jane Appleseed" onChange={handleName} value={name} pattern="[A-Za-z ]{3,}" id="name"></input>
            </label>
            <label>cvc
              <input type="text" placeholder="e.g. 123" onChange={handleCvv} value={cvv} pattern="[0-9]{3}" id="cvv"></input>
            </label>
            <button type="submit">Continue</button>
          </div>
          <div className="putInCardBack">
            <p id="cvvDiv">{cvv}</p>
          </div>
          <div className="putInCard">
            <Logo id="logo"/>
            <p className="carNumDiv">{cardNumber}</p>
            <p className="nameDiv">{name}</p>
          </div>
      </form>

      <div id="newCard" style={{display: "none"}}>
      <Logo id="logo"/>
        <p className="carNumDiv">{cardDetails.cardNumber}</p>
        <p className="nameDiv">{cardDetails.name}</p>
      </div>

      <div id="newCardBack"  style={{display: "none"}}>
            <p id="cvvDiv">{cardDetails.cvv}</p>
      </div>

      <div style={{display: "none"}} id="formComplete">
        <Complete id ="complete"/>
        <h2>THANK YOU</h2>
        <p>We've added your card details</p>
        <button style={{display: "none"}} id="btn" onClick={handleClick}>Continue</button>
      </div>

      <div className="bigBackground"></div>
    </div>
  );
}

export default App;
