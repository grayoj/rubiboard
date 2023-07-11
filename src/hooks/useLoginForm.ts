import axios from 'axios';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { LoginResponse } from '../types/LoginInterfaces';
import { baseUrl } from '../utils/Url';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useLoginForm = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [loading, setLoading] = useState(false);
 const [errorMessage, setErrorMessage] = useState('');
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [progress, setProgress] = useState(0);
 const navigate = useNavigate();

 useEffect(() => {
  const token = localStorage.getItem('user');
  if (token) {
   navigate('/dashboard');
  }
 }, [navigate]);

 const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
  setUsername(e.target.value);
 };

 const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
 };

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setProgress(30);


  try {
   const response = await axios.post<LoginResponse>(`${baseUrl}/api/auth/signin`, {
    username,
    password,
   });
   if (response.data.accessToken) {
    const token = response.data.accessToken;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(response.data));
   }
   toast.success('Login successful!', { autoClose: 2000 });
   setProgress(100);
   setTimeout(() => {
    navigate('/dashboard');
   }, 3000);
  } catch (error: any) {
   if (error.response && error.response.status === 401) {
    // User not approved
    setErrorMessage('');
    toast.error('Your account is pending verification. Please try again later.');
   } else if (error.response && error.response.status === 500) {
    // Internal server error
    setErrorMessage('Wrong credentials.If this persists, contact support.Or your account may be disabled.');
    toast.error('Wrong credentials. If this persists, contact support. Or your account may be disabled.');
   } else {
    // Other error
    setErrorMessage('Login failed. Please try again.');
    toast.error('Login failed. Please try again.');
   }
   setIsModalOpen(true);
   setProgress(0);
  } finally {
   setLoading(false);
  }
 };

 const closeModal = () => {
  setIsModalOpen(false);
 };

 return {
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  handleSubmit,
  loading,
  errorMessage,
  isModalOpen,
  closeModal,
  progress,
  setProgress
 };
};

export default useLoginForm;
