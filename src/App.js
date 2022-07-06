// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Pin from './Components/Pin';

function App() {
  const[card,setCard] = useState("")
  return (
    <div className="App">
     <Pin length={4} 
     setCardhandler={(value)=>{
      setCard(value)
     }}
     />   
   <h4>Credit card Number is {card}</h4>
    
    </div>
  );
}

export default App;
