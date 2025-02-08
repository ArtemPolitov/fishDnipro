import React from 'react'
import TopFrame from '../TopFrame/TopFrame'
import s from './FishingSpot.module.css'
import fishesRu from '../../locales/ru/fish'
import fishesUa from '../../locales/ua/fish'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/languageContext'
import FishingSpotGallery from './FishingSpotGallery/FishingSpotGallery'

export default function FishingSpot(props) {  
  const{currentLanguage} = useLanguage()
  let spotFishes = currentLanguage==='ru'?fishesRu.filter(item=>props.spot.fishId.includes(item.id)):fishesUa.filter(item=>props.spot.fishId.includes(item.id));

  return (
    <div>
      <TopFrame title={props.spot.name}/>
      <div className={s.spotInfo}>
        <div className={s.spotImgWrap}><img src={props.spot.imgSrc2}></img></div>
        <div className={s.spotDescription}>
          <p>
            {props.spot.description}
          </p>
          <p>
            <strong>{currentLanguage==='ru'?'Виды рыб на локации: ':'Види риб на локації: '} </strong>{spotFishes.map((fish,index)=>{
            return index===spotFishes.length-1?<Link to={`/fishdnipro/fishes/${fish.slug}`}>{fish.name.toLowerCase()}</Link>:<Link to={`/fishdnipro/fishes/${fish.slug}`}>{`${fish.name.toLowerCase()}, `}</Link>
            })}
          </p>
        </div>
      </div>
      <FishingSpotGallery spotId={props.spot.id}/>
    </div>
  )
}
