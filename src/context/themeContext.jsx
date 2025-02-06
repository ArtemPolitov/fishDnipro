import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light', 
  toggleTheme: ()=>{
  }
});

export function ThemeProvider({children}){
  const[theme,setTheme] = useState('light');
  useEffect(()=>{
    document.body.classList.toggle('darkTheme', theme === 'dark');
  },[theme])

  const toggleTheme = ()=> {
    setTheme(prev=>(prev==='light'?'dark':'light'));
  }
  
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider> 
  )
}

export function useTheme(){
  return useContext(ThemeContext);
}

