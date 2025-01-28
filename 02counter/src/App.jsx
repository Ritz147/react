import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  //let counter=15
  const addValue=()=>{
    if(counter<20){
    //setCounter(counter+1)
    //propagates the changes
    // setCounter(counter+1)//inka batch banega aur ek hi counter pe kaam krenge
    // setCounter(counter+1)//
    // setCounter(counter+1)//
    setCounter((prevcounter)=>prevcounter+1)
    setCounter((counter)=>counter+1)
    console.log("value added" , counter)
    }
    else{
      console.log('Cannot go above 20')
    }
  }
  const removeValue=()=>{
    if(counter>0){
      counter=counter-1
      setCounter(counter)
      console.log("value removed",counter)
    }
    else{
      console.log('Cannot go less than 0')
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
