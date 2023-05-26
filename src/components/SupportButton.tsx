import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

const SupportButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='fixed bottom-4 right-4'>
      <button
        className='flex bg-productGreen text-white rounded-md px-4 py-2'
        onClick={openModal}
      >
        {' '}
        <QuestionMarkCircleIcon className='mr-1 h-6 w-5' />
        Support
      </button>
      {isModalOpen && (
        <div className='fixed bottom-4 right-4 bg-basicDark rounded-md shadow-md p-4'>
          <h2 className='text-xl font-bold mb-2 text-white'>Support Details</h2>
          <p className='text-white'>Kindly mail: Support@rubidelivery.com</p>
          <button
            className='bg-productRed text-white rounded-md px-4 py-2 mt-4'
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default SupportButton;
