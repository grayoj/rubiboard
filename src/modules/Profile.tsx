import React from 'react';
import Sidebar from '../ui/sidebar/Sidebar';
import TopBar from '../ui/TopBar';
import DashboardWrapper from '../ui/DashboardWrapper';
import ProfileUI from '../ui/ProfileUI';

const Profile: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <DashboardWrapper>
        <ProfileUI />
      </DashboardWrapper>
    </>
  );
};

export default Profile;
