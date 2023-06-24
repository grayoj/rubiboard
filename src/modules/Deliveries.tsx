import React from 'react';
import TopBar from '../ui/TopBar';
import Sidebar from '../ui/sidebar/Sidebar';
import DeliveriesTable from '../ui/tables/DeliveriesTable';

const Deliveries: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <DeliveriesTable />
    </>
  );
};

export default Deliveries;
