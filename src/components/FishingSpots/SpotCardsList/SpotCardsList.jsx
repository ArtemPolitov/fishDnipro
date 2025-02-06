import React, { useEffect, useState } from 'react'
import SpotCard from '../SpotCard/SpotCard'
import s from './SpotCardsList.module.css'
import spots from '../../../data/spots';
import spotsRu from '../../../locales/ru/spots'
import spotsUa from '../../../locales/ua/spots'
import { useLanguage } from '../../../context/languageContext';

export default function SpotCardsList() {
  const{currentLanguage}=useLanguage();
  let spots = currentLanguage==='ru'?spotsRu:spotsUa;

  return (
    <div className={s.cardsList}>
      <ul>
        {spots.map(spot=>(
          <li key={spot.id}><SpotCard img={spot.imgSrc} description={spot.description} name={spot.name} fishId={spot.fishId} slug={spot.slug}/></li>
        ))}
      </ul>
    </div>
  )
}
