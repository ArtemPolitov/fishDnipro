import React, { useEffect,useState } from 'react'
import s from './FishingSpots.module.css'
import Settings from '../Settings/Settings'
import SpotCardsList from './SpotCardsList/SpotCardsList' 
import TopFrame from '../TopFrame/TopFrame'
import { useLanguage } from '../../context/languageContext'

export default function FishingSpots() {
  const{currentLanguage}=useLanguage();
  return (
    <div className={s.fishingSpots}>
      <TopFrame title={currentLanguage==='ru'?'Рыболовные места Днепра':'Риболовні місця Дніпра'}/>
      <SpotCardsList/>
    </div>
  )
}
