import React from 'react'
import s from './Settings.module.css'
import Theme from './Theme/Theme'
import Language from './Language/Language'

export default function Settings() {
  return (
    <div className={s.settings}>
      <Language/>
      <Theme/>
    </div>

   
  )
}
