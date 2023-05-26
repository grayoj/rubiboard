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

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/auth' element={<AuthGateway />} />
        <Route path='/auth/signup' element={<SignupForm />} />
        <Route path='/success' element={<Success />} />
        <Route path={`/success/${randomRoutePath}`} element={<Success />} />
        <Route path='/setup' element={<SetupPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;