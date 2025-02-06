import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import FishSideBar from './components/FishSideBar/FishSideBar';
import Fish from './components/Fish/Fish';
import FishingSpot from './components/FishingSpot/FishingSpot';
import FishingSpots from './components/FishingSpots/FishingSpots';
import fishData from './data/fish.js'
import spotsData from './data/spots.js'

import fishDataRu from './locales/ru/fish.js'
import fishDataUa from './locales/ua/fish.js' 
import spotsDataRu from './locales/ru/spots.js'
import spotsDataUa from './locales/ua/spots.js'

import { useParams } from 'react-router-dom';

import { useLanguage } from './context/languageContext.jsx';

function App() {
  const{currentLanguage} = useLanguage();

   return (
    <div className={s.appWrapper}>
      <FishSideBar data={currentLanguage==='ru'?fishDataRu:fishDataUa}/>
      <div className={s.content}>
        <Routes>
            <Route path="/fishes/:fishSlug" element={<FishWrapper data={currentLanguage==='ru'?fishDataRu:fishDataUa}/>}/>
            <Route path="/spots/:spotSlug" element={<SpotWrapper data={currentLanguage==='ru'?spotsDataRu:spotsDataUa}/>}/>
            <Route path="/" element={<FishingSpots/>}/>
        </Routes>
      </div>
    </div>
  )
}

function FishWrapper({data}){
  const { fishSlug } = useParams();
  //console.log(param);
  const fish = data.find(f => f.slug === fishSlug);
  return <Fish fish={fish} />
}

function SpotWrapper({data}){
  const { spotSlug } = useParams();
  const spot = data.find(s => s.slug === spotSlug);
  return <FishingSpot spot={spot} />
}

export default App
