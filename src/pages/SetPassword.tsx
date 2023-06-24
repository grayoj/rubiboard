import React from 'react';
import { useLocation } from 'react-router-dom';
import SetPasswordForm from '../ui/form/SetPasswordForm';

const SetPassword: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const resetToken = searchParams.get('token') || '';

  return <SetPasswordForm resetToken={resetToken} />;
};

export default SetPassword;
