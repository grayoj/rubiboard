import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useLogout = () => {
 const navigate = useNavigate();

 const logout = () => {
  localStorage.removeItem('token');
  navigate('/login');
 };

 useEffect(() => {
  const notifyLogout = () => {
   toast.success('You have been logged out successfully!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
   });
  };
  return () => {
   notifyLogout();
   logout();
  };
 }, []);

 return logout;
};

export default useLogout;
