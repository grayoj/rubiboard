import React from 'react';
import Button from './buttons/Button';

const CTA: React.FC = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-gradient-to-r from-productGreen to-darkTheme text-white rounded-md'>
      <h1 className='text-xl font-bold text-white'>Rubi Logistics</h1>
      <Button onClick={() => {}} disabled={false}>
        See Profile
      </Button>
    </div>
  );
};

export default CTA;
