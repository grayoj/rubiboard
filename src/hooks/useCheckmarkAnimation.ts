import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useCheckmarkAnimation = () => {
 const navigate = useNavigate();

 useEffect(() => {
  const timer = setTimeout(() => {
   navigate('/');
  }, 3000);

  return () => {
   clearTimeout(timer);
  };
 }, [navigate]);
};

export default useCheckmarkAnimation;
