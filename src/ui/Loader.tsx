import React from 'react';
import { CircleLoader } from 'react-spinners';

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({}) => {
  return <CircleLoader color='#97E398' size={20} />;
};

export default Loader;
