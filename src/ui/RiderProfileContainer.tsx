import React from 'react';
import Button from './buttons/Button';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import useRiderProfile from '../hooks/useRiderProfile';
import Spinner from './Spinner';

interface ProfileContainerProps {
  id: number;
}

const RiderProfileContainer: React.FC<ProfileContainerProps> = ({ id }) => {
  const { rider, loading } = useRiderProfile(id);
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/dashboard/riders');
  };

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!rider) {
    return (
      <div className='bg-darkTheme container mx-auto px-4 py-8'>
        <p className='text-white text-2xl'>Oops, that rider was not found</p>
      </div>
    );
  }

  return (
    <>
      <div className='bg-darkTheme container mx-auto px-4 py-8'>
        <p className='text-white text-2xl'>Rider's Profile</p>
        <div className='py-4'>
          <h2 className='text-2xl font-semibold text-white py-1'>
            {rider.fullName}
          </h2>
          <p className='text-white'>Username: {rider.username}</p>
          <p className='text-white'>Email: {rider.email} </p>
          <p className='text-white'>Street Address: {rider.streetAddress} </p>
          <p className='text-white'>Vehicle Number: {rider.vehicleNumber} </p>
          <p className='text-white'>Phone: {rider.phone}</p>
        </div>
      </div>
      <div className='bg-darkTheme container mx-auto my-4 px-4 py-8'>
        <div className='flex justify-between'>
          <Button disabled={false} onClick={goBack}>
            <ArrowLeftIcon className='h-5 w-5 mr-1' />
            Go Back
          </Button>
        </div>
      </div>
    </>
  );
};

export default RiderProfileContainer;
