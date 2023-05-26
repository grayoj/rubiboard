import axios from 'axios';
import { useState, ChangeEvent, FormEvent } from 'react';
import { LoginResponse } from '../types/LoginInterfaces';
import { baseUrl } from '../utils/Url';
import { useNavigate } from 'react-router-dom';

const useLoginForm = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [loading, setLoading] = useState(false);
 const [errorMessage, setErrorMessage] = useState('');
 const [isModalOpen, setIsModalOpen] = useState(false);
 const navigate = useNavigate();

 const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
  setUsername(e.target.value);
 };

 const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
 };

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
   const response = await axios.post<LoginResponse>(`${baseUrl}/auth/signin`, {
    username,
    password,
   });
   const token = response.data.token;
   localStorage.setItem('token', token);
   navigate('/dashboard');

  } catch (error: any) {
   setErrorMessage(error.message);
   setIsModalOpen(true);
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
 };
};

export default useLoginForm;
