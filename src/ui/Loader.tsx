import React from 'react';
import { PropagateLoader } from 'react-spinners';

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({}) => {
  return <PropagateLoader color='#97E398' size={20} />;
};

export default Loader;
