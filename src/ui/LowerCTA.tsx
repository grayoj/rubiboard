import React from 'react';
import Button from './buttons/Button';

const LowerCTA: React.FC = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-gradient-to-r from-productGreen to-darkTheme text-white rounded-md'>
      <h1 className='text-xl font-bold text-white'>
        {' '}
        Start managing your customers.
      </h1>
      <Button onClick={() => {}} disabled={false}>
        See Profile
      </Button>
    </div>
  );
};

export default LowerCTA;
