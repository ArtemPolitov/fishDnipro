import React from 'react'
import { useParams } from 'react-router-dom'
import TopFrame from '../TopFrame/TopFrame'
import s from './Fish.module.css';
import spots from '../../data/spots';
import spotsRu from '../../locales/ru/spots';
import spotsUa from '../../locales/ua/spots';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/languageContext';

export default function Fish(props) {
  const {currentLanguage} = useLanguage();
  const fishSpots = currentLanguage==='ru'?spotsRu:spotsUa;
  //let fishSpots = spots.filter(spot=>props.fish.fishing_spots.includes(spot.name));



  return (
    <>
      <TopFrame title={props.fish.name}/>
      <div className={s.fishInfo}>
        <div className={s.fishImgWrap}><img src={props.fish.imgSrc}></img></div>
        <div className={s.fishDescription}>
          <p>
            {props.fish.description}
          </p>
          <p>
            <strong>{currentLanguage==='ru'?'Водится на локациях: ':'Водиться на локаціях: '} </strong>
            {
              fishSpots.map((spot,index)=>{
                return index===fishSpots.length-1?<Link to={`/fishdnipro/spots/${spot.slug}`}>{spot.name}</Link>:<Link to={`/fishdnipro/spots/${spot.slug}`}>{`${spot.name}, `}</Link>
              })
            }
          </p>
        </div>
      </div>
    </>
  )
}
