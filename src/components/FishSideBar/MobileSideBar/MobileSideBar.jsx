import React from 'react';
import s from './MobileSideBar.module.css';
import { createPortal } from 'react-dom';
import { useMobileSidebar } from '../../../context/mobileSidebarContext';
import Settings from '../../Settings/Settings';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo1.png';
import { useTheme } from '../../../context/themeContext';
import Burger from '../../TopFrame/Burger/Burger';

export default function MobileSideBar({ props }) {
  const { isMobileSidebarOpen, closeMobileSidebar } = useMobileSidebar();
  const modalRoot = document.getElementById('modal-root');
  const { theme } = useTheme();

  return (
    createPortal(
      <>
        {isMobileSidebarOpen && <div className={s.overlay} onClick={closeMobileSidebar}></div>}
        <div
          className={`${s.mobileSidebar} ${isMobileSidebarOpen ? s.open : ''} ${theme === 'dark' ? s.mobileSidebarDark : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Link to={'fishdnipro/'}><img src={logo} alt="" className={s.imgLogo} /></Link>
          <div className={s.burgerWrapper} onClick={closeMobileSidebar}><Burger /></div>
          <div className={s.settingsContainer}>
            <Settings />
          </div>
          <h2 className={s.mobileSidebarTitle}>Список рыб</h2>
          <ul className={s.fishList}>
            {props.data.map(fish => (
              <li key={fish.id} className={s.fishItemWrap} onClick={closeMobileSidebar}>
                <Link to={`fishdnipro/fishes/${fish.slug}`} end className={({ isActive }) => (isActive ? `${sfishItemActive} ${s.fishItem}` : s.fishItem)}>
                  {fish.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>,
      modalRoot
    )
  );
}
