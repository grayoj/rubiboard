import { Transition } from '@headlessui/react';
import { BellAlertIcon, XCircleIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useState } from 'react';

const NotificationPanel: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div
      aria-live='assertive'
      className='fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start mt-8'
    >
      <div className='w-full flex flex-col items-center space-y-4 sm:items-end'>
        <Transition
          show={show}
          as={Fragment}
          enter='transform ease-out duration-300 transition'
          enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
          enterTo='translate-y-0 opacity-100 sm:translate-x-0'
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='max-w-sm w-full bg-darkTheme shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'>
            <div className='p-4'>
              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <BellAlertIcon
                    className='h-6 w-6 text-productGreen'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-3 w-0 flex-1 pt-0.5'>
                  <p className='text-sm font-medium text-white'>
                    Welcome Rubi Logistics
                  </p>
                  <p className='mt-1 text-sm text-white'>
                    This dashboard created for you will let you manage your
                    services.
                  </p>
                </div>
                <div className='ml-4 flex-shrink-0 flex'>
                  <button
                    className='rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <span className='sr-only'>Close</span>
                    <XCircleIcon
                      className='h-5 w-5 text-productRed'
                      aria-hidden='true'
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default NotificationPanel;
