import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [characterAllowed,setCharacterAllowed]=useState(false)
  const [password,setPassword]=useState("")
  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
   let pass=""
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed)str+="0123456789"
   if(characterAllowed)str+="!@#$%^&*()-_=+\|[{}]:/?.>"
   for(let i=1;i<=length;i++){
    let char=str.charAt(Math.floor(Math.random()*str.length+1))
    pass=pass+char
   }
   setPassword(pass)
  },[length,numberAllowed,characterAllowed,setPassword])
  useEffect(()=>{
   passwordGenerator();
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  const copyPasswordToClipBoard=useCallback(()=>{
    //passwordRef.current?.select()
    passwordRef.current?.focus(); // Focus the input before selecting text
  passwordRef.current?.setSelectionRange(0, 3); // Selects the first 3 characters

   window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
  <h1 className="text-white text-center my-3">Password Generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordRef}/>
    <button className="outline-none bg-blue-600 px-3 py-1 shrink-0" onClick={copyPasswordToClipBoard}>Copy</button>
  </div>
  <div className="flex text-s gap-x-2">
    <div className="flex items-center gap-x-1">
      <input type="range" min={6} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} className="cursor-pointer" />
      <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setNumberAllowed((prev) => !prev); }} />
      <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox" defaultChecked={characterAllowed} id="characterInput" onChange={() => { setCharacterAllowed((prev) => !prev); }} />
      <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>




    </>
  )
}

export default App
