import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import s from './App.module.css';
import FishSideBar from './components/FishSideBar/FishSideBar';
import Fish from './components/Fish/Fish';
import FishingSpot from './components/FishingSpot/FishingSpot';
import FishingSpots from './components/FishingSpots/FishingSpots';
import fishDataRu from './locales/ru/fish.js';
import fishDataUa from './locales/ua/fish.js'; 
import spotsDataRu from './locales/ru/spots.js';
import spotsDataUa from './locales/ua/spots.js';
import { useLanguage } from './context/languageContext.jsx';

const BASE_PATH = '/fishdnipro';

function App() {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');

    if (redirectPath) {
      console.log(`Redirecting to: ${BASE_PATH}${redirectPath}`);
      navigate(`${BASE_PATH}${redirectPath}`, { replace: true });
    }
  }, []);

  return (
    <div className={s.appWrapper}>
      <FishSideBar data={currentLanguage === 'ru' ? fishDataRu : fishDataUa} />
      <div className={s.content}>
        <Routes>
          <Route path="/fishdnipro/" element={<FishingSpots />} />
          <Route path="/fishdnipro/fishes/:fishSlug" element={<FishWrapper data={currentLanguage === 'ru' ? fishDataRu : fishDataUa} />} />
          <Route path="/fishdnipro/spots/:spotSlug" element={<SpotWrapper data={currentLanguage === 'ru' ? spotsDataRu : spotsDataUa} />} />
          <Route path="*" element={<NotFoundRedirect />} />
        </Routes>
      </div>
    </div>
  );
}

function NotFoundRedirect() {
  useEffect(() => {
    window.location.href = "/fishdnipro/";
  }, []);
  return <p>Redirecting...</p>;
}

function FishWrapper({ data }) {
  const { fishSlug } = useParams();
  const fish = data.find(f => f.slug === fishSlug);
  if (!fish) return <p>Рыба не найдена</p>;
  return <Fish fish={fish} />;
}

function SpotWrapper({ data }) {
  const { spotSlug } = useParams();
  const spot = data.find(s => s.slug === spotSlug);
  if (!spot) return <p>Место не найдено</p>;
  return <FishingSpot spot={spot} />;
}

export default App;
