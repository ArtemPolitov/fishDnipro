import React from 'react'
import Settings from '../Settings/Settings'
import s from './TopFrame.module.css';
import { useState,useEffect } from 'react';
import { useMobileSidebar } from '../../context/mobileSidebarContext';
import Burger from './Burger/Burger';

export default function TopFrame(props) {
  const {openMobileSidebar} = useMobileSidebar()

  const[isBorderVisible,setIsBorderVisible]=useState(true);
  useEffect(()=>{
    function handleScroll(){
      if(window.scrollY>1){
        setIsBorderVisible(false);
      }else{
        setIsBorderVisible(true);
      }
    }
    
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[]);

  return (
    <div className={isBorderVisible?`${s.top} ${s.isBorderVisible}`:s.top}>
      <div className={s.burgerWrapper} onClick={openMobileSidebar}><Burger/></div>
      <div className={s.title}>{props.title}</div>
      <div className={s.settingsContainer}><Settings/></div>
    </div>
  )
}
