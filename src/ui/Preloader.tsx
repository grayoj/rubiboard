import React from 'react';
import { PropagateLoader } from 'react-spinners';

const PreLoader: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <PropagateLoader color='#97E398' size={50} />
    </div>
  );
};

export default PreLoader;
