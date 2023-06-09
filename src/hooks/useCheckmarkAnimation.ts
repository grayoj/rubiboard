import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { randomRoutePath } from './useRandomStringRoute';

const useCheckmarkAnimation = () => {
 const navigate = useNavigate();

 useEffect(() => {
  const timer = setTimeout(() => {
   navigate(`/setup/${randomRoutePath}`);
  }, 3000);

  return () => {
   clearTimeout(timer);
  };
 }, [navigate]);
};

export default useCheckmarkAnimation;
