import React from 'react'
import lightThemeLogo from '../../../assets/images/theme/darkTheme.png';
import darkThemeLogo from '../../../assets/images/theme/lightTheme.png';
import s from './Theme.module.css';
import { useContext } from 'react';
import {ThemeContext} from '../../../context/themeContext';

export default function Theme(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={s.theme}>
      <div className={s.themeHandler} onClick={toggleTheme}>{theme==='light'?<img src={lightThemeLogo} className={s.lightThemeLogo}/>:<img src={darkThemeLogo} className={s.darkThemeLogo}/>}</div>
    </div>
  )
}
