import React from 'react';
import Sidebar from '../ui/sidebar/Sidebar';
import TopBar from '../ui/TopBar';
import { SearchPaymentScreen } from '../ui/tables/SearchPayments';

export const SearchPayments: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <SearchPaymentScreen />
    </>
  );
};
