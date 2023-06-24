import { useEffect, useState } from 'react';
import axios from 'axios';
import { RiderFormData } from '../types/SignupInterfaces';
import { baseUrl } from '../utils/Url';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserToken } from '../store/authSlice';
import { RootState } from '../store/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { randomRoutePath } from './useRandomStringRoute';

const useBoardingForm = () => {
 const [step, setStep] = useState(1);
 const [loading, setLoading] = useState(false);
 const [errorMessage, setErrorMessage] = useState('');
 const navigate = useNavigate();
 const [formData, setFormData] = useState<RiderFormData>({
  name: '',
  username: '',
  email: '',
  password: '',
  phone: '',
  streetAddress: '',
  vehicleNumber: '',
 });

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
 ) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));
 };

 const handleNextStep = () => {
  setStep((prevStep) => prevStep + 1);
 };

 const handlePrevStep = () => {
  setStep((prevStep) => prevStep - 1);
 };

 const dispatch = useDispatch();
 const userToken = useSelector((state: RootState) => state.auth.userToken);
 const config = {
  headers: {
   Authorization: `Bearer ${userToken}`,
  },
 };

 useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
   dispatch(setUserToken(token));
  }
 }, [dispatch]);

 const handleSubmit = async (e: React.FormEvent) => {
  setLoading(true);
  e.preventDefault();

  try {
   await axios.post(`${baseUrl}/api/auth/rider/signup`, formData, config);
   console.log('Form submitted:', formData);
   navigate(`/dashboard/success/${randomRoutePath}`)

   toast.success('The rider was successfully onboarded and can now login on the app.', {
    position: toast.POSITION.TOP_CENTER,
   });
  } catch (error: any) {
   console.error('Form submission error:', error);
   setErrorMessage(error.message);

   toast.error('Something went wrong. Try again later.', {
    position: toast.POSITION.TOP_CENTER,
   });
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

export default useBoardingForm;
