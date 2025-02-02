import {createContext,useContext} from 'react'
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{

    },
    lightTheme:()=>{

    }
})//aap initially bhi context ko kuch default values de skte hain(variables and methods)
export const ThemeProvider=ThemeContext.Provider
//custom hooks
export default function useTheme(){
  return useContext(ThemeContext)
}
