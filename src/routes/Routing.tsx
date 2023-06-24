import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import Login from '../pages/Login';
import Landing from '../pages/Landing';
import AuthGateway from '../pages/AuthGateway';
import SignupForm from '../ui/form/SignupForm';
import Success from '../pages/Success';
import { randomRoutePath } from '../hooks/useRandomStringRoute';
import NotFound from '../pages/NotFound';
import SetupPage from '../pages/SetupPage';
import DashboardPage from '../pages/DashboardPage';
import { SessionProvider } from '../providers/SessionProvider';
import ProfilePage from '../pages/ProfilePage';
import CustomersPage from '../pages/CustomersPage';
import RidersPage from '../pages/RidersPage';
import OnboardRidersPage from '../pages/OnboardRidersPage';
import NotificationsPage from '../pages/NotificationsPage';
import DeliveriesPage from '../pages/DeliveriesPage';
import ViewRiderPage from '../pages/ViewRiderPage';
import OnboardSuccess from '../pages/OnboardSuccess';
import SendReset from '../pages/SendReset';
import SetPassword from '../pages/SetPassword';
import ReportsPage from '../pages/ReportsPage';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />

        <Route path='/landing' element={<Landing />} />
        <Route path='/auth' element={<AuthGateway />} />
        <Route path='/auth/signup' element={<SignupForm />} />
        <Route path='/auth/forgot' element={<SendReset />} />
        <Route path='/reset' element={<SetPassword />} />

        <Route path={`/success/${randomRoutePath}`} element={<Success />} />
        <Route path={`/setup/${randomRoutePath}`} element={<SetupPage />} />

        <Route
          path='/*'
          element={
            <SessionProvider>
              <Routes>
                <Route path='/dashboard' element={<DashboardPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/notifications' element={<NotificationsPage />} />
                <Route path='/dashboard/reports' element={<ReportsPage />} />
                <Route
                  path='/dashboard/customers'
                  element={<CustomersPage />}
                />

                <Route
                  path='/dashboard/deliveries'
                  element={<DeliveriesPage />}
                />
                <Route path='/dashboard/riders' element={<RidersPage />} />
                <Route
                  path='/dashboard/riders/onboard'
                  element={<OnboardRidersPage />}
                />

                <Route
                  path='/dashboard/riders/:id'
                  element={<ViewRiderPage />}
                />
                <Route
                  path={`/dashboard/success/${randomRoutePath}`}
                  element={<OnboardSuccess />}
                />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </SessionProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
