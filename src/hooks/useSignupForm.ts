import { useState } from 'react';
import axios from 'axios';
import { FormData } from '../types/SignupInterfaces';
import { baseUrl } from '../utils/Url';
import { useNavigate } from 'react-router-dom';
import { randomRoutePath } from './useRandomStringRoute';

const useSignupForm = () => {
 const [step, setStep] = useState(1);
 const [loading, setLoading] = useState(false);
 const [errorMessage, setErrorMessage] = useState('');
 const navigate = useNavigate();
 const [formData, setFormData] = useState<FormData>({
  name: '',
  username: '',
  email: '',
  password: '',
  state: '',
  cacnumber: '',
  riderNumber: '',
  address: '',
 });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));
 };

 const handleNextStep = () => {
  setStep((prevStep) => prevStep + 1);
 };

 const handlePrevStep = () => {
  setStep((prevStep) => prevStep - 1);
 };

 const handleSubmit = async (e: React.FormEvent) => {
  setLoading(true);
  e.preventDefault();
  try {
   await axios.post(`${baseUrl}/api/auth/signup`, formData);
   console.log('Form submitted:', formData);
   navigate(`/success/${randomRoutePath}`)

  } catch (error: any) {
   console.error('Form submission error:', error);
   setErrorMessage(error.message);
  } finally {
   setLoading(false);
  }
 };

 return {
  step,
  formData,
  handleChange,
  handleNextStep,
  handlePrevStep,
  handleSubmit,
  errorMessage,
  loading,
 };
};

export default useSignupForm;
