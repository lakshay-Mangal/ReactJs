import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [Counter,setCounter]=useState(0);
 
  const addValue = ()=> {
    if(Counter>=20) setCounter(Counter)
      else
    setCounter(Counter=> Counter+1);
    console.log("value incremented", Counter);
  };
  const subValue = ()=> {
         if(Counter<=0) setCounter(Counter);
        else 
        setCounter(Counter=> Counter-1);

   console.log("value decremented", Counter);
  }
  //jo mismatch error aa rhi h logs mein usko solve karna h to use incValue and decValue

  const incValue = () => {
    const newValue = Counter + 1;
    setCounter(newValue);
    console.log("value incremented", newValue); // Now this will perfectly match!
};

const decValue = () => { 
    const newValue = Counter - 1;
    setCounter(newValue);
    console.log("value decremented", newValue);
}
  return (
    <> 
    <h1> Counter Project </h1>
    <h2> Counter Value : {Counter} </h2>
    <button onClick={addValue}> Add Value {Counter} </button>
    <br/>
    <button onClick={subValue}> Remove Value {Counter} </button>
    <p> footer : {Counter} </p>
    </>
    )
}

export default App
