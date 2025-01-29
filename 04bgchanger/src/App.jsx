import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  let [color, setColor] = useState("#ff4500");

  return (
    <>
      <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>{setColor("red");console.log("changed to ",color)}}>Red</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>{setColor("green");console.log("changed to ",color)}}>Green</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#967bb6"}} onClick={()=>setColor("#967bb6")}>Lavendar</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#ff69b4"}} onClick={()=>setColor("#ff69b4")}>Pink</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#808000"}} onClick={()=>setColor("#808000")}>Olive</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
