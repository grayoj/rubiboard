import React from 'react';

const NotificationsUI: React.FC = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='bg-darkTheme rounded-lg p-8 mt-8'>
        <h2 className='text-2xl text-white font-semibold mb-4'>
          You have no messages or notifications from us.
        </h2>
        <p className='text-white'>Check back later for updates.</p>
      </div>
    </div>
  );
};

export default NotificationsUI;
