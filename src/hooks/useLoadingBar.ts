import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const useLoadingBar = (duration: number, redirectPath: string) => {
 const loadingBarRef = useRef<any>(null);
 const navigate = useNavigate();

 useEffect(() => {
  const timeout = setTimeout(() => {
   loadingBarRef.current.complete();
   navigate(redirectPath);
  }, duration);

  loadingBarRef.current.continuousStart();

  return () => clearTimeout(timeout);
 }, [duration, navigate, redirectPath]);

 return loadingBarRef;
};

export default useLoadingBar;
