import { Fragment, useState } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { sidebarItems } from '../../utils/SidebarItems';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {' '}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 md:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-darkTheme'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='h-0 flex-1 overflow-y-auto pt-5 pb-4'>
                    <div className='flex flex-shrink-0 items-center px-4'>
                      <p className='text-white font-extrabold'>
                        Rubi Logistics
                      </p>
                    </div>
                    <nav className='mt-5 space-y-1 px-2'>
                      {sidebarItems.map((item) =>
                        !item.children ? (
                          <div key={item.name}>
                            <a
                              href='/Home'
                              className={classNames(
                                item.current
                                  ? ' text-white'
                                  : ' text-white hover:bg-basicDark hover:text-gray-900',
                                'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? 'text-white'
                                    : 'text-gray-400 group-hover:text-white',
                                  'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden='true'
                              />
                              {item.name}
                            </a>
                          </div>
                        ) : (
                          <Disclosure
                            as='div'
                            key={item.name}
                            className='space-y-1'
                          >
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    item.current
                                      ? 'bg-darkTheme text-white'
                                      : 'bg-darkTheme text-white hover:bg-gray-50 hover:text-gray-900',
                                    'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                  )}
                                >
                                  <item.icon
                                    //@ts-ignore
                                    className='mr-3 flex-shrink-0 h-6 w-6 text-white group-hover:text-white'
                                    aria-hidden='true'
                                    color='white'
                                  />
                                  <span className='flex-1'>{item.name}</span>
                                  <svg
                                    className={classNames(
                                      open
                                        ? 'text-white rotate-90'
                                        : 'text-white',
                                      'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                    )}
                                    viewBox='0 0 20 20'
                                    aria-hidden='true'
                                  >
                                    <path
                                      d='M6 6L14 10L6 14V6Z'
                                      fill='currentColor'
                                    />
                                  </svg>
                                </Disclosure.Button>
                                <Disclosure.Panel className='space-y-1'>
                                  {item.children.map((subItem) => (
                                    <Disclosure.Button
                                      key={subItem.name}
                                      as='a'
                                      href={subItem.href}
                                      className='group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-white rounded-md hover:text-gray-900 hover:bg-gray-50'
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        )
                      )}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className='w-14 flex-shrink-0' aria-hidden='true'></div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
          <div className='flex min-h-0 flex-1 flex-col bg-darkTheme'>
            <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
              <div className='flex flex-shrink-0 items-center px-4'>
                <p className='text-white font-extrabold text-xl'>
                  Rubi Logistics
                </p>
              </div>
              <nav className='pt-8 mt-5 flex-1 space-y-6 px-2'>
                {sidebarItems.map((item) =>
                  !item.children ? (
                    <div key={item.name}>
                      <a
                        href='/Home'
                        className={classNames(
                          item.current
                            ? ' text-white'
                            : ' text-white hover:bg-basicDark',
                          'group w-full flex items-center pl-2 py-4 text-lg font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          color={'#FFFFFF'}
                          className={classNames(
                            item.current
                              ? 'text-white'
                              : 'text-white group-hover:text-white',
                            'mr-3 flex-shrink-0 h-6 w-6 text-white'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    </div>
                  ) : (
                    <Disclosure as='div' key={item.name} className='space-y-1'>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? 'bg-darkTheme text-white'
                                : 'bg-darkTheme text-white hover:bg-gray-50 hover:text-gray-900',
                              'group w-full flex items-center pl-2 pr-1 py-4 text-left text-lg font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            )}
                          >
                            <item.icon
                              color={'#FFFFFF'}
                              //@ts-ignore
                              className='mr-3 flex-shrink-0 h-6 w-6 text-white group-hover:text-white'
                              aria-hidden='true'
                            />
                            <span className='flex-1'>{item.name}</span>
                            <svg
                              className={classNames(
                                open ? 'text-white rotate-90' : 'text-white',
                                'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                              )}
                              viewBox='0 0 20 20'
                              aria-hidden='true'
                            >
                              <path
                                d='M6 6L14 10L6 14V6Z'
                                fill='currentColor'
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className='space-y-1'>
                            {item.children.map((subItem) => (
                              <Disclosure.Button
                                key={subItem.name}
                                as='a'
                                href={subItem.href}
                                className='group w-full flex items-center pl-11 pr-2 py-2 text-lg font-medium text-white rounded-md hover:text-gray-900 hover:bg-gray-50'
                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-col md:pl-64 bg-darkTheme'>
          <div className='sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden'>
            <button
              type='button'
              className='-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
