import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../utils/Url';

const useResetPassword = () => {
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState('');

 const navigation = useNavigate();

 const resetPassword = async (resetToken: string, newPassword: string) => {
  setIsLoading(true);
  setError('');

  try {
   const response = await axios.post(`${baseUrl}/api/auth/reset`, {
    resetToken,
    newPassword,
   });
   toast.success("Your Password Reset was successful")
   setTimeout(() => {
    navigation("/login")
   }, 3000)
   console.log(response.data);
  } catch (error) {
   toast.error("Failed to Reset your Password. Try again.")
   console.error(error);
   setError('Failed to reset password.');
  } finally {
   setIsLoading(false);
  }
 };

 return { resetPassword, isLoading, error };
};

export default useResetPassword;
