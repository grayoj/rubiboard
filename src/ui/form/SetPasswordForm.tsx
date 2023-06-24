import React, { useState } from 'react';
import useResetPassword from '../../hooks/useResetPassword';
import FormButton from '../buttons/FormButton';
import Spinner from '../Spinner';
import { toast } from 'react-toastify';
import SignupFormWrapper from './SignupFormWrapper';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

interface SetPasswordFormProps {
  resetToken: string;
}

const SetPasswordForm: React.FC<SetPasswordFormProps> = ({ resetToken }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { resetPassword, isLoading, error } = useResetPassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      resetPassword(resetToken, newPassword);
    } else {
      toast.error('Passwords do not match.');
    }
  };

  const renderErrorMessage = () => {
    if (error) {
      toast.error(error);
      return (
        <>
          <div className='mt-2'>
            {error && <p className='text-productRed my-2'>{error}</p>}
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div>
      <SignupFormWrapper>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h2 className='text-white my-4'>Set New Password</h2>
              <label className='block text-sm font-medium text-white'>
                New Password
              </label>
              <div className='relative flex items-center'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
                />
                {showPassword ? (
                  <EyeIcon
                    type='button'
                    className='text-black mb-6 text-xs absolute right-2 top-1/2 transform -translate-y-full cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ width: '16px', height: '16px' }}
                  />
                ) : (
                  <EyeSlashIcon
                    type='button'
                    className='text-black mb-6 text-xs absolute right-2 top-1/2 transform -translate-y-full cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ width: '16px', height: '16px' }}
                  />
                )}
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium text-white'>
                Confirm Passowrd
              </label>
              <div className='relative flex items-center'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
                />
                {showPassword ? (
                  <EyeIcon
                    type='button'
                    className='text-black mb-6 text-xs absolute right-2 top-1/2 transform -translate-y-full cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ width: '16px', height: '16px' }}
                  />
                ) : (
                  <EyeSlashIcon
                    type='button'
                    className='text-black mb-6 text-xs absolute right-2 top-1/2 transform -translate-y-full cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ width: '16px', height: '16px' }}
                  />
                )}
              </div>
            </div>
            {isLoading ? (
              <FormButton onClick={() => {}} disabled={false}>
                <Spinner />
              </FormButton>
            ) : (
              <FormButton onClick={() => {}} disabled={false}>
                Reset Password.
              </FormButton>
            )}
          </div>

          {renderErrorMessage()}
        </form>
      </SignupFormWrapper>
    </div>
  );
};

export default SetPasswordForm;
