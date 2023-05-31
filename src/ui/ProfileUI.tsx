import React from 'react';
import useLogout from '../hooks/useLogout';
import useGetAccount from '../hooks/useGetAccount';

interface User {
  companyName: string;
  email: string;
  username: string;
}

const ProfileUI: React.FC = () => {
  const user: User = useGetAccount();

  const logout = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className='bg-darkTheme rounded-md'>
        <div className='p-8 space-y-4'>
          <div>
            <h2 className='text-2xl font-bold text-white'>Profile</h2>
          </div>

          <div className='space-y-2'>
            <div>
              <label htmlFor='name' className='text-lg font-bold text-white'>
                Business Name
              </label>
              <p id='name' className='text-white'>
                Admin
              </p>
            </div>
            <div>
              <label htmlFor='name' className='text-lg font-bold text-white'>
                Username
              </label>
              <p id='name' className='text-white'>
                {user.username}
              </p>
            </div>
            <div>
              <label htmlFor='email' className='text-lg font-bold text-white'>
                Email Address
              </label>
              <p id='email' className='text-white'>
                {user.email}
              </p>
            </div>
            <div>
              <label htmlFor='cac' className='text-lg font-bold text-white'>
                Cac Number
              </label>
              <p id='email' className='text-white'>
                1000000000
              </p>
            </div>
            <div>
              <label htmlFor='address' className='text-lg font-bold text-white'>
                Street Address
              </label>
              <p id='email' className='text-white'>
                No 16. Cotonou Crescent, Wuse, FCT, Abuja
              </p>
            </div>
            <div>
              <label htmlFor='address' className='text-lg font-bold text-white'>
                State
              </label>
              <p id='email' className='text-white'>
                Abuja
              </p>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-bold text-white'>Statistics</h3>
            <p className='text-white'>Deliveries Completed: 10</p>
            <p className='text-white'>Riders: 5</p>
          </div>
        </div>
      </div>
      <div className='bg-darkTheme rounded-md my-4 p-4'>
        <div className='flex space-x-4'>
          <button className='px-4 py-2 text-white bg-productRed rounded'>
            Request Account Deletion
          </button>
          <button
            onClick={handleLogout}
            className='px-4 py-2 text-white bg-productGreen rounded'
          >
            Logout Account
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileUI;
