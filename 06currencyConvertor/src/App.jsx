import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {InputBox} from './components'//index file by default hi call hoti hai
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount,setAmount]=useState(0)
  const [from , setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=useCurrencyInfo(from)//jo data aa rhi hai wo object ke form me aa rhi hai
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert=()=>setConvertedAmount(amount*currencyInfo[to])
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://i.pinimg.com/736x/77/ce/9e/77ce9e8c915e6b1c54988e22b65b5a64.jpg')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onAmountChange={(amount)=>setAmount(amount)}
                              onCurrencyChange={(currency)=>setFrom(currency)}
                              currencyOptions={options}
                              selectCurrency={from}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              currencyOptions={options}
                              selectCurrency={to}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} To {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default App
