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
  const token = localStorage.getItem('token');
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
   const token = response.data.token;
   localStorage.setItem('token', token);
   toast.success('Login successful!', { autoClose: 2000 });
   setProgress(100);
   setTimeout(() => {
    navigate('/dashboard');
   }, 2000);
  } catch (error: any) {
   setErrorMessage(error.message);
   setIsModalOpen(true);
   toast.error('Login failed. Please try again.');
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
