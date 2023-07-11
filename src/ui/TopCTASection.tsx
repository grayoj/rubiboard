import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../utils/Url';
import { toast } from 'react-toastify';

interface TopCTASectionProps {}

interface FareManagement {
  id: number;
  amount: string;
  timestamp: string;
}

export const TopCTASection: React.FC<TopCTASectionProps> = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [fareManagement, setFareManagement] = useState<FareManagement | null>(
    null
  );

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/user/users/fare`)
      .then((response) => {
        setFareManagement(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Fare:', error);
        toast.error('Error fetching Fare', error);
      });
  }, []);

  return (
    <div className='bg-gradient-to-tr from-darkTheme to-productGreen py-4 px-4 rounded-lg'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-between'>
          <div className=''>
            <h2 className='text-xl font-semibold text-white'>Current Date</h2>
            <p className='text-white'>{currentDateTime}</p>
          </div>
          <div>
            <h2 className='text-xl text-white font-semibold'>Today's Fare</h2>
            <p className='text-white'>
              Base Fare: ₦{fareManagement?.amount} Naira, Updated:{' '}
              {fareManagement?.timestamp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
