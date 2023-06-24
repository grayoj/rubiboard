import React, { useEffect, useState } from 'react';
import Button from './buttons/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

const ManageRidersModal: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (hasSeenModal) {
      setShowModal(false);
    }
  }, []);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    localStorage.setItem('hasSeenModal', 'true');
  };

  let modalContent;
  switch (step) {
    case 1:
      modalContent = (
        <>
          <h2 className='text-xl text-white font-semibold mb-4'>
            Rider Management Panel.
          </h2>
          <p className='text-white mb-2'>
            Welcome to the Rider Management Panel, where you can manage your
            riders
          </p>
          <div className='flex justify-end'>
            <Button onClick={handleNextStep} disabled={false}>
              Next
              <ArrowRightIcon className='h-5 w-5 ml-1' />
            </Button>
          </div>
        </>
      );
      break;
    case 2:
      modalContent = (
        <>
          <h2 className='text-xl text-white font-semibold mb-4'>
            Manage your riders.
          </h2>
          <p className='text-white mb-2'>
            Get a general overview of all your registered riders in a structured
            table interface.
          </p>
          <div className='flex justify-between'>
            <Button onClick={handlePrevStep} disabled={false}>
              <ArrowLeftIcon className='h-5 w-5 mr-1' />
              Previous
            </Button>
            <Button onClick={handleNextStep} disabled={false}>
              Next
              <ArrowRightIcon className='h-5 w-5 ml-1' />
            </Button>
          </div>
        </>
      );
      break;
    case 3:
      modalContent = (
        <>
          <h2 className='text-xl text-white font-semibold mb-4'>
            Onboard Riders
          </h2>
          <p className='text-white mb-2'>
            Register your riders by creating accounts for them and monitor them
          </p>
          <div className='flex justify-between'>
            <Button onClick={handlePrevStep} disabled={false}>
              <ArrowLeftIcon className='h-5 w-5 mr-1' />
              Previous
            </Button>
            <Button onClick={handleNextStep} disabled={false}>
              Next
              <ArrowRightIcon className='h-5 w-5 ml-1' />
            </Button>
          </div>
        </>
      );
      break;
    case 4:
      modalContent = (
        <>
          <h2 className='text-xl text-white font-semibold mb-4'>
            Adminstrative Functionalities
          </h2>
          <p className='text-white mb-2'>
            Manage, disable and control the activity of your riders on the
            platform
          </p>
          <div className='flex justify-between'>
            <Button onClick={handlePrevStep} disabled={false}>
              <ArrowLeftIcon className='h-5 w-5 mr-1' />
              Previous
            </Button>
            <Button onClick={handleNextStep} disabled={false}>
              Next
              <ArrowRightIcon className='h-5 w-5 ml-1' />
            </Button>
          </div>
        </>
      );
      break;
    case 5:
      modalContent = (
        <>
          <h2 className='text-xl text-white font-semibold mb-4'>
            Tailored to suit your experience.
          </h2>
          <p className='text-white mb-2'>
            Own your own space, manage your own platform seamlessly with Rubi
          </p>
          <div className='flex justify-between'>
            <Button onClick={handlePrevStep} disabled={false}>
              <ArrowLeftIcon className='h-5 w-5 mr-1' />
              Previous
            </Button>
            <Button onClick={handleNextStep} disabled={false}>
              Next
              <ArrowRightIcon className='h-5 w-5 ml-1' />
            </Button>
          </div>
        </>
      );
      break;
    case 6:
      modalContent = (
        <>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Get Started!
          </h2>
          <p className='text-white'>Alright, Thank You</p>
          <div className='flex justify-between'>
            <Button onClick={handleCloseModal} disabled={false}>
              Close
            </Button>
          </div>
        </>
      );
      break;
    default:
      modalContent = null;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        showModal ? '' : 'hidden'
      }`}
    >
      <div className='absolute inset-0 backdrop-filter backdrop-blur-lg'></div>
      <div className='bg-darkTheme p-8 md:p-20 rounded-lg shadow-lg relative'>
        {modalContent}
      </div>
    </div>
  );
};

export default ManageRidersModal;
