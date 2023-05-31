import React from 'react';
import Sidebar from '../ui/sidebar/Sidebar';
import TopBar from '../ui/TopBar';
import RidersUI from '../ui/RidersUI';

const Riders: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <RidersUI />
    </>
  );
};

export default Riders;
