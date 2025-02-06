import { createContext, useState, useContext} from 'react';

 const LanguageContext = createContext({
  currentLanguage: 'ru', 
  setRu: ()=>{
  },
  setUa: ()=>{
  }
});

export function LanguageProvider({children}){
  const[currentLanguage, setLanguage] = useState('ru');

  function setRu(){
    setLanguage('ru');
  }

  function setUa(){
    setLanguage('ua');
  }
  
  /*function toggleLanguage(){
    setLanguage(prev=>(prev==='ru'?'ua':'ru'))
  }*/

  return <LanguageContext.Provider value={{currentLanguage,setRu,setUa}}>{children}</LanguageContext.Provider>
}

export function useLanguage(){
  return useContext(LanguageContext);
};