import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useOnboardCheckmark = () => {
 const navigate = useNavigate();

 useEffect(() => {
  const timer = setTimeout(() => {
   navigate(`/dashboard/riders`);
  }, 3000);

  return () => {
   clearTimeout(timer);
  };
 }, [navigate]);
};

export default useOnboardCheckmark;
