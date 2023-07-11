import React from 'react';
import Sidebar from '../ui/sidebar/Sidebar';
import TopBar from '../ui/TopBar';
import { FinanceTableSearch } from '../ui/tables/FinanceTableSearch';

export const PaymentsSearch: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <FinanceTableSearch />
    </>
  );
};
