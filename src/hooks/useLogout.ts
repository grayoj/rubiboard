import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useLogout = () => {
 const navigate = useNavigate();

 const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  navigate('/login');
 };

 const handleLogout = () => {
  toast.success('You have been logged out successfully!', {
   position: toast.POSITION.TOP_CENTER,
   autoClose: 2000,
  });
  logout();
 };

 useEffect(() => {
  return () => {
   // Cleanup function to remove the event listener when the component unmounts
   document.removeEventListener('click', handleLogout);
  };
 }, []);

 return handleLogout;
};

export default useLogout;
