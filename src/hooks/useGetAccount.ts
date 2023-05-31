import { useEffect, useState } from 'react';

const useGetAccount = () => {
 const [user, setUser] = useState<any>(null)

 useEffect(() => {
  const userData = localStorage.getItem('user');
  if (userData) {
   const parsedUserData = JSON.parse(userData);
   setUser(parsedUserData);
  }
 }, []);

 return user;
};

export default useGetAccount;
