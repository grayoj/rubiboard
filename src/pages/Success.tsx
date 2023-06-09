import React, { useEffect } from 'react';
import Checkmark from '../ui/Checkmark';
import useCheckmarkAnimation from '../hooks/useCheckmarkAnimation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Success: React.FC = () => {
  useCheckmarkAnimation();
  useEffect(() => {
    toast.success('Your signup was successful!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  }, []);
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <Checkmark />
      </div>
      <div className='mt-4'>
        <h2 className='text-white text-lg'>Successful</h2>
      </div>
    </>
  );
};

export default Success;
