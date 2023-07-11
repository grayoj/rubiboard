import React, { useEffect, useState } from 'react';
import useLogout from '../hooks/useLogout';
import useGetAccount from '../hooks/useGetAccount';
import { User } from '../types/UserInterfaces';
import axios from 'axios';
import { baseUrl } from '../utils/Url';
import Spinner from './Spinner';

const ProfileUI: React.FC = () => {
  const [totalRiders, setTotalRiders] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const user: User = useGetAccount();

  const logout = useLogout();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const userData = localStorage.getItem('user');
    let userId: any;

    if (userData) {
      const user = JSON.parse(userData);
      userId = user.id;
    }

    const fetchRidersCount = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${baseUrl}/api/user/riders/count?userId=${userId}`
        );
        const { totalRiders } = response.data;
        setTotalRiders(totalRiders);
      } catch (error) {
        console.error('Error fetching riders count:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchRidersCount();
    }
  }, []);

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
                {user?.companyName}
              </p>
            </div>
            <div>
              <label htmlFor='name' className='text-lg font-bold text-white'>
                Username
              </label>
              <p id='name' className='text-white'>
                {user?.username}
              </p>
            </div>
            <div>
              <label htmlFor='email' className='text-lg font-bold text-white'>
                Email Address
              </label>
              <p id='email' className='text-white'>
                {user?.email}
              </p>
            </div>
            <div>
              <label htmlFor='cac' className='text-lg font-bold text-white'>
                Cac Number
              </label>
              <p className='text-white'>{user?.cacNumber}</p>
            </div>
            <div>
              <label htmlFor='address' className='text-lg font-bold text-white'>
                Street Address
              </label>
              <p className='text-white'>{user?.streetAddress}</p>
            </div>
            <div>
              <label htmlFor='address' className='text-lg font-bold text-white'>
                State
              </label>
              <p className='text-white'>{user?.companyState}</p>
            </div>
            <div>
              <label htmlFor='address' className='text-lg font-bold text-white'>
                Bank Name
              </label>
              <p className='text-white'>{user?.bankName}</p>
            </div>
            <div>
              <label htmlFor='address' className='text-lg font-bold text-white'>
                Account Number
              </label>
              <p className='text-white'>{user?.accountNumber}</p>
            </div>
          </div>
          <div>
            <p className='text-white'>
              Riders: {loading ? <Spinner /> : totalRiders}
            </p>
          </div>
        </div>
      </div>
      <div className='bg-darkTheme rounded-md my-4 p-4'>
        <div className='flex space-x-4'>
          <button
            className='px-4 py-2 text-white rounded'
            style={{ backgroundColor: 'yellow' }}
          >
            Update Account
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
