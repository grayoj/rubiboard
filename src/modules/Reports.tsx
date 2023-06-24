import React from 'react';
import Sidebar from '../ui/sidebar/Sidebar';
import TopBar from '../ui/TopBar';
import DashboardWrapper from '../ui/DashboardWrapper';
import ReportsUI from '../ui/ReportsUI';

const Reports: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <DashboardWrapper>
        <ReportsUI />
      </DashboardWrapper>
    </>
  );
};

export default Reports;
