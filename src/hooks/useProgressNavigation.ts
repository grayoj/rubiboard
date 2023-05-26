import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useProgressNavigation = () => {
 const [progress, setProgress] = useState(0);
 const [currentTextIndex, setCurrentTextIndex] = useState(0);
 const texts = [
  'Creating your account.',
  'Making sure everything works.',
  'Setting up your profile.',
  'Finishing Touches.',
 ];

 const navigate = useNavigate();

 useEffect(() => {
  const interval = setInterval(() => {
   if (progress < 100) {
    setProgress(progress + 25);
   } else {
    setCurrentTextIndex((prevIndex) => prevIndex + 1);
    setProgress(0);

    if (currentTextIndex === texts.length - 1) {
     navigate('/');
    }
   }
  }, 2000);

  return () => clearInterval(interval);
 }, [progress, currentTextIndex, navigate, texts.length]);

 return {
  progress,
  currentText: texts[currentTextIndex],
 };
};

export default useProgressNavigation;
