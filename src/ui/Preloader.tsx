import React from 'react';
import { BounceLoader } from 'react-spinners';

const PreLoader: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <BounceLoader color='#97E398' size={50} />
    </div>
  );
};

export default PreLoader;
