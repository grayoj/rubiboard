import React, { useEffect } from 'react';
import Checkmark from '../ui/Checkmark';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useOnboardCheckmark from '../hooks/useOnboardCheckmark';

const OnboardSuccess: React.FC = () => {
  useOnboardCheckmark();
  useEffect(() => {
    toast.success('Your signup was successful!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 4000,
    });
  }, []);
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <Checkmark />
      </div>
      <div className='mt-4'>
        <h2 className='text-white text-lg'>Your rider has been onboarded</h2>
      </div>
    </>
  );
};

export default OnboardSuccess;
