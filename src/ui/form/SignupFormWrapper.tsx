import React, { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}

const SignupFormWrapper: React.FC<FormProps> = ({ children }) => {
  return (
    <div className='flex min-h-full flex-col justify-center pb-12 sm:px-6 lg:px-8 items-center h-screen'>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-darkTheme py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SignupFormWrapper;
