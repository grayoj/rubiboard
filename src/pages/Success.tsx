import React from 'react';
import Checkmark from '../ui/Checkmark';
import useCheckmarkAnimation from '../hooks/useCheckmarkAnimation';

const Success: React.FC = () => {
  useCheckmarkAnimation();
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <Checkmark />
      </div>
      <div className='mt-2'>
        <h2 className='text-white'>Your Registration was Successful</h2>
      </div>
    </>
  );
};

export default Success;
