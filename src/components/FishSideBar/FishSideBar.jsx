import React, { useEffect, useState } from 'react'
import s from './FishSideBar.module.css'
import logo from '../../assets/images/logo1.png';
import { NavLink,Link } from 'react-router-dom';
import MobileSideBar from './MobileSideBar/MobileSideBar';

export default function FishSideBar(props) {
  console.log(props);
  return (
    <>
      <div className={s.sideBar}>
        <Link to={'fishdnipro/'}><img src={logo} alt="" className={s.imgLogo}/></Link>
        <h2>Список рыб</h2>
        <ul className={s.fishList}>
          {props.data.map(fish=>(
              <li key={fish.id} className={s.fishItemWrap}><NavLink to={`fishdnipro/fishes/${fish.slug}`} end className={({isActive})=> (isActive?`${s.fishItemActive} ${s.fishItem}` :s.fishItem)}>{fish.name}</NavLink></li>
          ))}
        </ul>
        <div className={s.verticalLine}></div>
        
      </div>
      <MobileSideBar props = {props}/>
    </>
  )
}
