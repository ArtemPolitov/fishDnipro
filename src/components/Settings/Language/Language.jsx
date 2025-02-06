import React from 'react';
import s from './Language.module.css';
import { useLanguage } from '../../../context/languageContext';

export default function Language() {
  const {currentLanguage,setRu,setUa}= useLanguage();


  return (
    <div className={s.language}>
      <button className={currentLanguage==='ru'?`${s.langBtn} ${s.ru} ${s.activeBtn}`:`${s.langBtn} ${s.ru}`} onClick={setRu}>RU</button>
      <div className={s.middleLine}></div>
      <button className={currentLanguage==='ua'?`${s.langBtn} ${s.activeBtn}`:`${s.langBtn}`} onClick={setUa} >UA</button>
    </div>
  )
}
