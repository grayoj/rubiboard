import { useState } from 'react';
import axios from 'axios';
import { FormData } from '../types/SignupInterfaces';
import { baseUrl } from '../utils/Url';
import { useNavigate } from 'react-router-dom';
import { randomRoutePath } from './useRandomStringRoute';
import 'react-toastify/dist/ReactToastify.css';
import { validateStep } from '../utils/Validation';


const useSignupForm = () => {
 const [step, setStep] = useState(1);
 const [loading, setLoading] = useState(false);
 const [errorMessage, setErrorMessage] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const navigate = useNavigate();
 const [formData, setFormData] = useState<FormData>({
  companyName: '',
  username: '',
  email: '',
  password: '',
  companyState: '',
  cacNumber: '',
  riderNumber: '',
  streetAddress: '',
  accountNumber: '',
  bankName: '',
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

  const error = validateStep(step, formData, name);
  if (formData.password !== confirmPassword) {
   setErrorMessage("Passwords do not match");
   return;
  }

  setErrorMessage(error);

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
  setErrorMessage,
  loading,
  confirmPassword,
  setConfirmPassword
 };
};

export default useSignupForm;
