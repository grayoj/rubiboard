import React from 'react';
import DashboardWrapper from '../ui/DashboardWrapper';
import TopBar from '../ui/TopBar';
import Sidebar from '../ui/sidebar/Sidebar';
import CustomerUI from '../ui/CustomerUI';

const Customers: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <DashboardWrapper>
        <CustomerUI />
      </DashboardWrapper>
    </>
  );
};

export default Customers;
