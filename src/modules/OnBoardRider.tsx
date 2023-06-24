import React from 'react';
import Sidebar from '../ui/sidebar/Sidebar';
import TopBar from '../ui/TopBar';
import OnboardUI from '../ui/OnboardUI';

const OnBoardRider: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <OnboardUI />
    </>
  );
};

export default OnBoardRider;
