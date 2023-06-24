import React from 'react';
import Sidebar from '../ui/sidebar/Sidebar';
import TopBar from '../ui/TopBar';
import RiderProfileContainer from '../ui/RiderProfileContainer';
import DashboardWrapper from '../ui/DashboardWrapper';
import { useParams } from 'react-router-dom';

const ViewRider: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <Sidebar />
      <TopBar />
      <DashboardWrapper>
        <RiderProfileContainer id={Number(id)} />
      </DashboardWrapper>
    </>
  );
};

export default ViewRider;
