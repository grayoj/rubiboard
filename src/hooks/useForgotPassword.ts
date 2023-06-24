import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../utils/Url';

const useForgotPassword = () => {
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState('');
 const navigation = useNavigate()

 const forgotPassword = async (email: string) => {
  setIsLoading(true);
  setError('');

  try {
   const response = await axios.post(`${baseUrl}/api/auth/forgot`, { email });
   toast.success("Your reset link was succesfully sent to your email!");
   setTimeout(() => {
    navigation('/reset')
   }, 3000);
   console.log(response.data);

  } catch (error) {
   console.error(error);
   setError('Failed to send password reset instructions.');
   toast.error("Failed to send Reset. We don't think this mail exists")
  } finally {
   setIsLoading(false);
  }
 };

 return { forgotPassword, isLoading, error };
};

export default useForgotPassword;
