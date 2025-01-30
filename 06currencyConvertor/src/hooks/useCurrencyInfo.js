import {useEffect,useState} from 'react'
//kayi hooks optional argumnets lete hain hum yaha optional argument nahi le rhe
function useCurrencyInfo(currency){
 //we willl make an api call here
 const [data,setData]=useState({})
 useEffect(()=>{
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>setData(res[currency]))
  console.log(data)
 },[currency])//currency ke andar jab bhi change aa jayega toh mai dobara call karana chahunga
 console.log(data)
 return data
}
export default useCurrencyInfo;