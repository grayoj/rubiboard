import React, { useState } from 'react';
import SignupFormWrapper from './SignupFormWrapper';
import 'react-toastify/dist/ReactToastify.css';
import FormButton from '../buttons/FormButton';
import useForgotPassword from '../../hooks/useForgotPassword';
import Spinner from '../Spinner';
import { toast } from 'react-toastify';

const SendResetForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const { forgotPassword, isLoading, error } = useForgotPassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    forgotPassword(email);
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
    <SignupFormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h2 className='text-white text-center my-4'>
              Enter the email your company uses.
            </h2>
            <label className='block text-sm font-medium text-white'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
            />
          </div>
          {isLoading ? (
            <FormButton onClick={() => {}} disabled={false}>
              <Spinner />
            </FormButton>
          ) : (
            <FormButton onClick={() => {}} disabled={false}>
              Send Reset Link
            </FormButton>
          )}
        </div>
        {renderErrorMessage()}
      </form>
    </SignupFormWrapper>
  );
};

export default SendResetForm;
