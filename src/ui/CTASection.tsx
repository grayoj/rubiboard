import React from 'react';
import Button from './buttons/Button';
import useLogout from '../hooks/useLogout';
import useGetAccount from '../hooks/useGetAccount';
import { User } from '../types/UserInterfaces';

const CTA: React.FC = () => {
  const logout = useLogout();
  const user: User = useGetAccount();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='flex items-center justify-between px-4 py-3 bg-gradient-to-r from-productGreen to-darkTheme text-white rounded-md'>
      <h1 className='text-xl font-bold text-white'>{user?.companyName}</h1>
      <Button onClick={handleLogout} disabled={false}>
        Logout
      </Button>
    </div>
  );
};

export default CTA;
