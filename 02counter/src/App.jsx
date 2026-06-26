import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  //let counter=15
  const addValue=()=>{
    //counter=counter+1
    if(counter<20)
    setCounter(counter+1)
    else {
      alert("Counter cannot be greater than 30!")
    }
    console.log("Clicked",counter);
  }
  const removeValue=()=>{
    if(counter>0)
    setCounter(counter-1)
  else {
      alert("Counter cannot be less than 0!")
    }
    console.log("Clicked",counter);
  }

  return (
    <> 
    <h1>Welcome to React</h1>
    <h2> Counter value: {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br></br>
    <button onClick={removeValue}>Remove value{counter}</button>
    </>
  )
    }
   

export default App
