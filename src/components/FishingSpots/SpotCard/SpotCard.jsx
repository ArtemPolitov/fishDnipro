import React, { useEffect,useState } from 'react';
import s from './SpotCard.module.css';
import fishes from '../../../data/fish.js';
import fishesRu from '../../../locales/ru/fish.js'
import fishesUa from '../../../locales/ua/fish.js'
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/languageContext.jsx';

export default function SpotCard({img,name,description,fishId, slug}) {
  const[image,setImage]=useState(null);
  useEffect(()=>{
    let isMounted = true;

    const loadImage = async () => {
      const module = await import(`../../../assets/images/spots/${img}.jpg`);
      if (isMounted) {
          setImage(module.default);
      }
    };

    loadImage();

    return () => {
        isMounted = false;
    };

  },[image]);

  const{currentLanguage} = useLanguage();
  let fishes = currentLanguage==='ru'?fishesRu:fishesUa;
  function getSpotFishesNames(){
    let fishNamesArr = [];
    for(let id of fishId){
      for(let fish of fishes){
        if(id===fish.id){
          fishNamesArr.push(fish.name)
        }
      }
    }
    return fishNamesArr;
  }

  let spotFishesArr = getSpotFishesNames();

  return (
    <div className={s.spotCard}>
      <div className={s.imgWrap}><Link to={`spots/${slug}`}><img src={image} className={s.spotImg}></img></Link></div>
      <div className={s.cardText}>
        <Link to={`spots/${slug}`}>
          <div className={s.spotName}>{name}</div>
          <div className={s.spotDescription}>{description}</div>
        </Link>
        <div className={s.spotFishes}>
          <p><strong>{currentLanguage==='ru'?'Виды рыб: ':'Види риб: '}</strong>
            {spotFishesArr.map((fishName,index)=>{
              let fishSlug=null;
              for(let fish of fishes){
                if(fishName === fish.name){
                  fishSlug = fish.slug;
                }
              }
              return(
                <>
                  <Link to={`fishes/${fishSlug}`}>{fishName.toLowerCase()}</Link>
                  {index === getSpotFishesNames().length - 1?'':', '}
                </>
              )
            })}
          </p>
        </div>
      </div>
        
    </div>
  )
}
