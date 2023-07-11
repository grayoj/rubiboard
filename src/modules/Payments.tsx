import React from 'react';
import TopBar from '../ui/TopBar';
import Sidebar from '../ui/sidebar/Sidebar';
import { FinanceTable } from '../ui/tables/FinanceTable';

export const Payments: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <FinanceTable />
    </>
  );
};
