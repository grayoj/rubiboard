import React, { useEffect, useState } from 'react';
import { ArrowUpIcon, CubeIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Bicycle, CashOutline } from 'react-ionicons';
import Spinner from './Spinner';
import { baseUrl } from '../utils/Url';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// interface RiderResponse {
//   totalRiders: number;
// }

interface DeliveryResponse {
  deliveryCount: number;
  totalElements: number;
}

const DashboardCards: React.FC = () => {
  const [totalRiders, setTotalRiders] = useState<number | null>(null);
  const [deliveryCount, setDeliveryCount] = useState<number | null>(null);
  const [paymentCount, setPaymentsCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    let userId: any;

    if (userData) {
      const user = JSON.parse(userData);
      userId = user.id;
    }

    const fetchRidersCount = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${baseUrl}/api/user/riders/count?userId=${userId}`
        );
        const { totalRiders } = response.data;
        setTotalRiders(totalRiders);
      } catch (error) {
        console.error('Error fetching riders count:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchRidersCount();
    }
  }, []);

  useEffect(() => {
    const fetchDeliveriesCount = async () => {
      try {
        setLoading(true);
        // Retrieve the userId from local storage
        //@ts-ignore
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user && user.id; // Perform null check

        if (userId) {
          const response = await axios.get<DeliveryResponse>(
            `${baseUrl}/api/delivery/deliveries/rider?userId=${userId}`
          );
          const data = response.data;
          setDeliveryCount(data.totalElements);
        }
      } catch (error) {
        console.error('Error fetching Deliveries count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeliveriesCount();
  }, []);

  useEffect(() => {
    const fetchPaymentsCount = async () => {
      try {
        setLoading(true);
        // Retrieve the userId from local storage
        //@ts-ignore
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user && user.id; // Perform null check

        if (userId) {
          const response = await axios.get<DeliveryResponse>(
            `${baseUrl}/api/delivery/deliveries/rider/payments?userId=${userId}`
          );
          const data = response.data;
          setPaymentsCount(data.totalElements);
        }
      } catch (error) {
        console.error('Error fetching Payments count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentsCount();
  }, []);
  return (
    <div className='mt-4'>
      <h3 className='text-lg leading-6 font-medium text-white'>
        Quick Overview
      </h3>
      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='relative bg-darkTheme pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'>
          <dt>
            <div className='absolute bg-productGreen rounded-md p-3'>
              <Bicycle
                //@ts-ignore
                className='h-6 w-6 text-white'
                color='white'
                aria-hidden='true'
              />
            </div>
            <p className='ml-16 text-sm font-medium text-white truncate'>
              Riders
            </p>
          </dt>
          <dd className='ml-16 pb-6 flex items-baseline sm:pb-7'>
            <p className='text-2xl font-semibold text-white'>
              {loading ? <Spinner /> : totalRiders}
            </p>
            <p
              className={classNames(
                'ml-2 flex items-baseline text-sm font-semibold text-white'
              )}
            >
              <ArrowUpIcon
                className='self-center flex-shrink-0 h-5 w-5 text-white'
                aria-hidden='true'
              />

              <span className='sr-only'>by</span>
            </p>
            <div className='absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6'>
              <div className='text-sm'>
                <Link
                  to='/dashboard/riders'
                  className='font-medium text-white hover:text-productGreen'
                >
                  {' '}
                  See More
                  <span className='sr-only'> Rider stats</span>
                </Link>
              </div>
            </div>
          </dd>
        </div>
        <div className='relative bg-darkTheme pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'>
          <dt>
            <div className='absolute bg-productGreen rounded-md p-3'>
              <CashOutline
                //@ts-ignore
                className='h-6 w-6 text-white'
                color='white'
                aria-hidden='true'
              />
            </div>
            <p className='ml-16 text-sm font-medium text-white truncate'>
              Payments
            </p>
          </dt>
          <dd className='ml-16 pb-6 flex items-baseline sm:pb-7'>
            <p className='text-2xl font-semibold text-white'>
              {loading ? <Spinner /> : paymentCount}
            </p>
            <p
              className={classNames(
                'ml-2 flex items-baseline text-sm font-semibold text-white'
              )}
            >
              <ArrowUpIcon
                className='self-center flex-shrink-0 h-5 w-5 text-white'
                aria-hidden='true'
              />

              <span className='sr-only'>by</span>
            </p>
            <div className='absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6'>
              <div className='text-sm'>
                <Link
                  to='/'
                  className='font-medium text-white hover:text-productGreen'
                >
                  {' '}
                  See More
                  <span className='sr-only'> Customer stats</span>
                </Link>
              </div>
            </div>
          </dd>
        </div>
        <div className='relative bg-darkTheme pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'>
          <dt>
            <div className='absolute bg-productGreen rounded-md p-3'>
              <CubeIcon
                //@ts-ignore
                className='h-6 w-6 text-white'
                color='white'
                aria-hidden='true'
              />
            </div>
            <p className='ml-16 text-sm font-medium text-white truncate'>
              Deliveries
            </p>
          </dt>
          <dd className='ml-16 pb-6 flex items-baseline sm:pb-7'>
            <p className='text-2xl font-semibold text-white'>
              {loading ? <Spinner /> : deliveryCount}
            </p>
            <p
              className={classNames(
                'ml-2 flex items-baseline text-sm font-semibold text-white'
              )}
            >
              <ArrowUpIcon
                className='self-center flex-shrink-0 h-5 w-5 text-white'
                aria-hidden='true'
              />

              <span className='sr-only'>by</span>
            </p>
            <div className='absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6'>
              <div className='text-sm'>
                <Link
                  to='/dashboard/deliveries'
                  className='font-medium text-white hover:text-productGreen'
                >
                  {' '}
                  See More
                  <span className='sr-only'>Delivery stats</span>
                </Link>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default DashboardCards;
