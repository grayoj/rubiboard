import React from 'react';
import { stats } from '../utils/Stats';
import { ArrowUpIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const DashboardCards: React.FC = () => {
  return (
    <div className='mt-4'>
      <h3 className='text-lg leading-6 font-medium text-white'>
        Quick Overview
      </h3>
      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {stats.map((item) => (
          <div
            key={item.id}
            className='relative bg-darkTheme pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'
          >
            <dt>
              <div className='absolute bg-productGreen rounded-md p-3'>
                <item.icon
                  className='h-6 w-6 text-white'
                  color='white'
                  aria-hidden='true'
                />
              </div>
              <p className='ml-16 text-sm font-medium text-white truncate'>
                {item.name}
              </p>
            </dt>
            <dd className='ml-16 pb-6 flex items-baseline sm:pb-7'>
              <p className='text-2xl font-semibold text-white'>{item.stat}</p>
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
                    <span className='sr-only'> {item.name} stats</span>
                  </Link>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default DashboardCards;
