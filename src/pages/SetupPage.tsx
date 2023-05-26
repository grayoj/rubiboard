import React from 'react';
import useProgressNavigation from '../hooks/useProgressNavigation';

const SetupPage: React.FC = () => {
  const { progress, currentText } = useProgressNavigation();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md px-4 py-8 bg-basicDark shadow-md rounded-md'>
        <h1 className='text-xl font-bold text-white'>{currentText}</h1>
        <div className='w-full bg-darkTheme mt-4'>
          <div
            className='h-4 bg-productGreen'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;
