import React, { useState } from 'react';
import Button from '../buttons/Button';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/20/solid';
import FormButton from '../buttons/FormButton';
import Spinner from '../Spinner';
import SignupFormWrapper from './SignupFormWrapper';
import useBoardingForm from '../../hooks/useBoardingForm';
import { isStepValid } from '../../utils/Validation';

const OnboardingForm: React.FC = () => {
  const {
    step,
    formData,
    handleChange,
    handleNextStep,
    handlePrevStep,
    handleSubmit,
    loading,
    errorMessage,
    confirmPassword,
    setConfirmPassword,
  } = useBoardingForm();
  const [showPassword, setShowPassword] = useState(false);
  const isFormStepValid =
    isStepValid(step, formData) && formData.password === confirmPassword;
  return (
    <SignupFormWrapper>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2 className='text-white text-center my-4'>
              Enter the fullname of your Company's Rider. That is how it would
              appear to customers.
            </h2>
            <label className='block text-sm font-medium text-white'>
              Rider's Fullname
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
            />
            <Button onClick={handleNextStep} disabled={false}>
              Next
              <ArrowRightIcon className='h-5 w-5' />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className='text-white text-center my-4'>
              Set up the username and password credentials for your rider, for
              better control.
            </h2>
            <label className='block text-sm font-medium text-white'>
              Username
            </label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
            />
            <label className='block text-sm font-medium text-white'>
              Password
            </label>
            <div className='mt-1'>
              <div className='relative flex items-center'>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  required
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
            <label className='block text-sm font-medium text-white'>
              Confirm Password
            </label>
            <div className='mt-1'>
              <div className='relative flex items-center'>
                <input
                  name='ConfirmPassword'
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
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
            <div className='flex justify-between'>
              <Button onClick={handlePrevStep} disabled={false}>
                <ArrowLeftIcon className='h-5 w-5' />
                Previous
              </Button>
              <Button onClick={handleNextStep} disabled={!isFormStepValid}>
                Next
                <ArrowRightIcon className='h-5 w-5' />
              </Button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className='text-white text-center my-4'>
              Enter the phone number of the rider. It's the number he would
              receive calls on.
            </h2>
            <label className='block text-sm font-medium text-white'>
              Phone Number
            </label>
            <input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
            />

            <div className='flex justify-between'>
              <Button onClick={handlePrevStep} disabled={false}>
                <ArrowLeftIcon className='h-5 w-5' />
                Previous
              </Button>
              <Button onClick={handleNextStep} disabled={false}>
                Next
                <ArrowRightIcon className='h-5 w-5' />
              </Button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className='text-white text-center my-4'>
              Enter the home address of the rider.
            </h2>
            <label className='block text-sm font-medium text-white'>
              Rider Home Address
            </label>
            <input
              type='text'
              name='streetAddress'
              value={formData.streetAddress}
              onChange={handleChange}
              className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
            />

            <div className='flex justify-between'>
              <Button onClick={handlePrevStep} disabled={false}>
                <ArrowLeftIcon className='h-5 w-5' />
                Previous
              </Button>
              <Button onClick={handleNextStep} disabled={false}>
                Next
                <ArrowRightIcon className='h-5 w-5' />
              </Button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <div>
              <h2 className='text-white text-center my-4'>
                Enter the rider's email address.
              </h2>
              <label className='block text-sm font-medium text-white'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
              />
              <div className='flex justify-between mt-4'>
                <Button onClick={handlePrevStep} disabled={false}>
                  <ArrowLeftIcon className='h-5 w-5' />
                  Previous
                </Button>
                <Button onClick={handleNextStep} disabled={false}>
                  Next
                  <ArrowRightIcon className='h-5 w-5' />
                </Button>
              </div>
            </div>
          </div>
        )}
        {step === 6 && (
          <div>
            <div>
              <h2 className='text-white text-center my-4'>
                Enter the vehicle number on the rider's assigned motorbike.
              </h2>
              <label className='block text-sm font-medium text-white'>
                Vehicle Number
              </label>
              <input
                type='text'
                name='vehicleNumber'
                value={formData.vehicleNumber}
                onChange={handleChange}
                className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
              />
              <div className='flex justify-between mt-4'>
                <Button onClick={handlePrevStep} disabled={false}>
                  <ArrowLeftIcon className='h-5 w-5' />
                  Previous
                </Button>
                <Button onClick={handleNextStep} disabled={false}>
                  Next
                  <ArrowRightIcon className='h-5 w-5' />
                </Button>
              </div>
            </div>
          </div>
        )}
        {step === 7 && (
          <div>
            <h2 className='text-white text-center my-4'>
              By onboarding this rider, you agree with our{' '}
              <u>Terms and Conditions</u> including our <u>Privacy Policy.</u>
            </h2>
            <div className='flex justify-between mt-4'>
              <Button onClick={handlePrevStep} disabled={false}>
                <ArrowLeftIcon className='h-5 w-5' />
                Previous
              </Button>
              <Button onClick={handleNextStep} disabled={false}>
                Next
                <ArrowRightIcon className='h-5 w-5' />
              </Button>
            </div>
          </div>
        )}
        {step === 8 && (
          <div>
            <h2 className='text-white text-center my-4'>
              I agree. Finish Onboarding.
            </h2>
            {loading ? (
              <FormButton onClick={() => {}} disabled={false}>
                <Spinner />
              </FormButton>
            ) : (
              <FormButton onClick={() => {}} disabled={false}>
                Create Account
              </FormButton>
            )}
          </div>
        )}
      </form>
      {errorMessage ? (
        <>
          <div className='bg-productRed border border-productRed text-white px-4 py-3 mt-4 rounded relative flex'>
            <div className='flex-grow'>{errorMessage}</div>
            <div className='flex items-center cursor-pointer'>
              Help
              <ArrowRightIcon className='h-5 w-5' />
            </div>
          </div>
          <div className='mt-2'>
            <Button onClick={handlePrevStep} disabled={false}>
              <ArrowLeftIcon className='h-5 w-5' />
              Previous
            </Button>
          </div>
        </>
      ) : null}
    </SignupFormWrapper>
  );
};

export default OnboardingForm;
