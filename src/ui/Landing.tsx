import React from 'react';
import useAccountSelection from '../hooks/useAccountSelection';
import Button from './buttons/Button';

const LandingUI: React.FC = () => {
  const { selectedOption, handleOptionSelect, handleNextButtonClick } =
    useAccountSelection();
  return (
    <section className='flex min-h-full flex-col justify-center pb-12 sm:px-6 lg:px-8 items-center h-screen'>
      <h2 className='text-2xl font-semibold mb-4 text-white'>
        How are you creating an account?
      </h2>
      <div className='grid grid-cols-2 gap-6'>
        <div
          className={`bg-darkTheme rounded-lg shadow-md p-6 flex flex-col items-center cursor-pointer ${
            selectedOption === 'business' ? 'bg-productGreen' : ''
          }`}
          onClick={() => handleOptionSelect('business')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-blue-500 mb-4'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            {/* SVG path */}
          </svg>
          <p className='text-white'>I am creating for a business.</p>
        </div>
        <div
          className={`bg-darkTheme rounded-lg shadow-md p-6 flex flex-col items-center cursor-pointer ${
            selectedOption === 'individual' ? 'bg-productGreen' : ''
          }`}
          onClick={() => handleOptionSelect('individual')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-blue-500 mb-4'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            {/* SVG path */}
          </svg>
          <p className='text-white'>I am an individual.</p>
        </div>
      </div>
      <div className='mt-8'>
        <Button onClick={handleNextButtonClick} disabled={!selectedOption}>
          Next
        </Button>
      </div>
    </section>
  );
};

export default LandingUI;
