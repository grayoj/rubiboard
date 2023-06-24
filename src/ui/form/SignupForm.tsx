import React, { useState } from 'react';
import useSignupForm from '../../hooks/useSignupForm';
import Button from '../buttons/Button';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/20/solid';
import { DropdownOptionInput } from '../dropdown/DropdownOptionInput';
import { nigeriaStates } from '../../utils/NgStates';
import { riderNumber } from '../../utils/RiderNumber';
import FormButton from '../buttons/FormButton';
import Spinner from '../Spinner';
import SignupFormWrapper from './SignupFormWrapper';
import { isStepValid } from '../../utils/Validation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm: React.FC = () => {
  const {
    step,
    formData,
    handleChange,
    handleNextStep,
    handlePrevStep,
    handleSubmit,
    loading,
    confirmPassword,
    setConfirmPassword,
    errorMessage,
  } = useSignupForm();

  const [showPassword, setShowPassword] = useState(false);
  const isFormStepValid =
    isStepValid(step, formData) && formData.password === confirmPassword;

  const renderErrorMessage = () => {
    if (errorMessage) {
      toast.error(errorMessage);
      return (
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
      );
    }
    return null;
  };

  return (
    <SignupFormWrapper>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2 className='text-white text-center my-4'>
              What's the name of your Business?
            </h2>
            <label className='block text-sm font-medium text-white'>
              Business Name
            </label>
            <input
              type='text'
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
              className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
            />
            <Button onClick={handleNextStep} disabled={!isFormStepValid}>
              Next
              <ArrowRightIcon className='h-5 w-5' />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className='text-white text-center my-4'>
              What Username and Password would your company use? (Should not be
              less than 8 characters)
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
              Enter in your CAC (Company Registration Number) - Should be 14
              digits
            </h2>
            <label className='block text-sm font-medium text-white'>
              CAC Number
            </label>
            <input
              type='text'
              name='cacNumber'
              value={formData.cacNumber}
              onChange={handleChange}
              className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
            />

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
        {step === 4 && (
          <div>
            <h2 className='text-white text-center my-4'>
              Where is your company located?
            </h2>
            <label className='block text-sm font-medium text-white'>
              Street Address
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
              <Button onClick={handleNextStep} disabled={!isFormStepValid}>
                Next
                <ArrowRightIcon className='h-5 w-5' />
              </Button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <h2 className='text-white text-center my-4'>
              Where is your company located?
            </h2>
            <label
              htmlFor='companyState'
              className='block text-sm font-medium text-white'
            >
              Select your state.
            </label>
            <DropdownOptionInput
              options={nigeriaStates}
              value={formData.companyState}
              onChange={(value) =>
                handleChange({ target: { name: 'companyState', value } } as
                  | React.ChangeEvent<HTMLInputElement>
                  | React.ChangeEvent<HTMLSelectElement>)
              }
            />
            <div className='flex justify-between mt-4'>
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
        {step === 6 && (
          <div>
            <h2 className='text-white text-center my-4'>
              How many riders are you starting with at your firm?
            </h2>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-white'
            >
              Select
            </label>
            <DropdownOptionInput
              options={riderNumber}
              value={formData.riderNumber}
              onChange={(value) =>
                handleChange({ target: { name: 'riderNumber', value } } as
                  | React.ChangeEvent<HTMLInputElement>
                  | React.ChangeEvent<HTMLSelectElement>)
              }
            />
            <div className='flex justify-between mt-4'>
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
        {step === 7 && (
          <div>
            <h2 className='text-white text-center my-4'>
              How many riders are you starting with at your firm?
            </h2>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-white'
            >
              Select
            </label>
            <DropdownOptionInput
              options={riderNumber}
              value={formData.riderNumber}
              onChange={(value) =>
                handleChange({ target: { name: 'riderNumber', value } } as
                  | React.ChangeEvent<HTMLInputElement>
                  | React.ChangeEvent<HTMLSelectElement>)
              }
            />
            <div className='flex justify-between mt-4'>
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
        {step === 8 && (
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
                value={formData.email}
                onChange={handleChange}
                className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4'
              />
              <div className='flex justify-between mt-4'>
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
          </div>
        )}
        {step === 9 && (
          <div>
            <h2 className='text-white text-center my-4'>
              It is worthy to note that by submitting this form, you agree with
              our <u>Terms and Conditions</u> including our{' '}
              <u>Privacy Policy.</u>
            </h2>
            <div className='flex justify-between mt-4'>
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
        {step === 10 && (
          <div>
            <h2 className='text-white text-center my-4'>
              I agree. Sign me up.
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
      {renderErrorMessage()}
    </SignupFormWrapper>
  );
};

export default SignupForm;
