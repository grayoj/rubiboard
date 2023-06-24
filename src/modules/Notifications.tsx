import React from 'react';
import DashboardWrapper from '../ui/DashboardWrapper';
import TopBar from '../ui/TopBar';
import Sidebar from '../ui/sidebar/Sidebar';
import NotificationsUI from '../ui/NotificationsUI';

const Notifications: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <DashboardWrapper>
        <NotificationsUI />
      </DashboardWrapper>
    </>
  );
};

export default Notifications;
