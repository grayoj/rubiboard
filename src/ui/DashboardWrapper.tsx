import React, { ReactNode } from 'react';

type WrapperProps = {
  children: ReactNode;
};
const DashboardWrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4'>
      {children}
    </div>
  );
};

export default DashboardWrapper;
