import React from 'react';
import Sidebar from '../ui/sidebar/Sidebar';
import TopBar from '../ui/TopBar';
import CTA from '../ui/CTASection';
import DashboardWrapper from '../ui/DashboardWrapper';
import NotificationPanel from '../ui/notifications/NotificationPanel';
import GraphUI from '../ui/GraphUI';
import DashboardCards from '../ui/DashboardCards';
import SupportButton from '../components/SupportButton';
import { TopCTASection } from '../ui/TopCTASection';

const Dashboard: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopBar />
      <DashboardWrapper>
        <CTA />
        <GraphUI />
        <TopCTASection />
        <DashboardCards />
      </DashboardWrapper>
      <SupportButton />
      <NotificationPanel />
    </>
  );
};

export default Dashboard;
