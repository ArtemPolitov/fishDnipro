import React, { useEffect } from 'react'
import closeIcon from '../../../assets/images/close_icon.png';
import leftArrow from '../../../assets/images/arrow_left.png';
import rightArrow from '../../../assets/images/arrow_right.png';
import s from './FishingSpotGallery.module.css'
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function FishingSpotGallery({spotId}) {
  const modalRoot = document.getElementById('modal-root');
  const [isOpen,setIsOpen] = useState(false);
  const [selectedImg,setSelectedImg] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(()=>{
    async function loadImages(){
      const images = import.meta.glob(`../../../assets/images/spots/*/*.{jpg,png,webp}`);
      const allPaths = Object.keys(images);
      const filteredPaths = allPaths.filter(path=>path.includes(`spots/${spotId}`));
      setImageUrls(filteredPaths);

      const urls = await Promise.all(filteredPaths.map(async path=>{
        const module = await images[path]();
        return module.default;
      }))

      setImageUrls(urls);
    }
    loadImages();
  },[]);

  function openImgModal(event){
    setIsOpen(true);
    let imgSrc = event.target.dataset.src;
    setSelectedImg(imgSrc);
  }

  function closeModal(){
    setSelectedImg(null);
    setIsOpen(false);
  }

  function hasPrevImg(url) {
    const index = imageUrls.indexOf(url);
    return index > 0; 
  }
  
  function hasNextImg(url) {
    const index = imageUrls.indexOf(url);
    return index >= 0 && index < imageUrls.length - 1;
  }

  function openPrevImg() {
    setIsOpen(false);
    const index = imageUrls.indexOf(selectedImg);
    if (index > 0) {
      const prevImg = imageUrls[index - 1];
      setSelectedImg(prevImg);
    }
    setIsOpen(true);
  }
  function openNextImg(){
    setIsOpen(false);
    const index = imageUrls.indexOf(selectedImg);
    if (index < imageUrls.length-1) {
      const nextImg = imageUrls[index + 1];
      setSelectedImg(nextImg);
    }
    setIsOpen(true);
  }

  return (
    <div className={s.FishingSpotGalleryRow}>
      {imageUrls.map(url=>{
        return(<img src={url} className={s.spotImg} data-src={url} onClick={openImgModal}/>)
        
      })}
      
      {
        isOpen&&createPortal(
          <div className={s.overlay} onClick={closeModal}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
              <img src={selectedImg} alt="Выбранное фото" className={s.modalImage}/>
              <button className={s.closeButton} onClick={closeModal}>
                <img src={closeIcon} alt="" className={s.closeIcon}/>
              </button>
              {hasPrevImg(selectedImg)?<button className={s.leftBtn} onClick={openPrevImg}><img src={leftArrow} alt="" className={s.arrowImg}/></button>:""}
              {hasNextImg(selectedImg)?<button className={s.rightBtn} onClick={openNextImg}><img src={rightArrow} alt="" className={s.arrowImg}/></button>:""}
            </div>
          </div>,modalRoot
        )
      }
    </div>
  )
}
