import { Wifi, Notifications, Person } from 'react-ionicons';
import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-darkTheme text-white'>
      <h1 className='text-xl font-bold text-white mr-20'>Dashboard</h1>
      <div className='flex items-center space-x-8'>
        <div className='flex items-center space-x-2'>
          <Wifi
            style={{ cursor: 'pointer' }}
            color='green'
            height='16px'
            width='16px'
          />
          <p className='text-sm text-white'>Your account is active</p>
        </div>
        <Notifications
          style={{ cursor: 'pointer' }}
          color='white'
          height='24px'
          width='24px'
        />
        <Person
          style={{ cursor: 'pointer' }}
          color='white'
          height='24px'
          width='24px'
        />
      </div>
    </div>
  );
};

export default TopBar;
