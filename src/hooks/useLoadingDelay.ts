import { useState, useEffect } from 'react';

const useLoadingDelay = (delay: number): boolean => {
 const [loading, setLoading] = useState<boolean>(true);

 useEffect(() => {
  const timeout = setTimeout(() => {
   setLoading(false);
  }, delay);

  return () => clearTimeout(timeout);
 }, [delay]);

 return loading;
};

export default useLoadingDelay;
