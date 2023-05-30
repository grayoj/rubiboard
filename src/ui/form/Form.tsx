import FormHeader from './FormHeader';
import useLoginForm from '../../hooks/useLoginForm';
import React from 'react';
import Spinner from '../Spinner';
import FormButton from '../buttons/FormButton';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import LoadingBar from 'react-top-loading-bar';

const Form: React.FC = () => {
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
    loading,
    errorMessage,
    progress,
    setProgress,
  } = useLoginForm();

  return (
    <>
      <LoadingBar
        progress={progress}
        height={3}
        color='#97E398'
        onLoaderFinished={() => setProgress(0)}
      />
      <div className='flex min-h-full flex-col justify-center pb-12 sm:px-6 lg:px-8 items-center h-screen'>
        <FormHeader />
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-darkTheme py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form className='space-y-6' method='POST' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='username'
                  className='block text-sm font-medium text-white'
                >
                  Business Username
                </label>
                <div className='mt-1'>
                  <input
                    name='username'
                    type='text'
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-white'
                >
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-white'
                  ></label>
                </div>
              </div>
              <div>
                {loading ? (
                  <FormButton onClick={() => {}} disabled={false}>
                    <Spinner />
                  </FormButton>
                ) : (
                  <FormButton onClick={() => {}} disabled={false}>
                    Sign In
                  </FormButton>
                )}
              </div>
            </form>
            {errorMessage ? (
              <div className='bg-productRed border border-productRed text-white px-4 py-3 mt-4 rounded relative flex'>
                <div className='flex-grow'>{errorMessage}</div>
                <div className='flex items-center cursor-pointer'>
                  Help
                  <ArrowRightIcon className='h-5 w-5' />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
