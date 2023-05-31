import * as React from 'react';
import Pdf from 'react-to-pdf';
import ReactPaginate from 'react-paginate';
import useRider from '../hooks/useRider';
import Spinner from './Spinner';

const ref = React.createRef<HTMLDivElement>();

const RidersUI: React.FC = () => {
  const { loading, riders, pageCount, handlePageClick, handleEditClick } =
    useRider();
  return (
    <main className='flex-1 xl:ml-64 bg-basicDark'>
      <div className='py-12'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'></div>
        <div className='px-4 sm:px-6 lg:px-8 mt-7'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-white'>
                Manage Riders
              </h1>
              <p className='mt-2 text-lg text-white'>
                Create, manage and On Board Riders
              </p>
            </div>
            <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
              <a
                href='/riders/onboard'
                className='inline-flex items-center justify-center rounded-md border border-transparent bg-productGreen px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
              >
                On Board Rider
              </a>
            </div>
          </div>
          <div className='mt-8 flex flex-col'>
            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-white ring-opacity-5 md:rounded-lg'>
                  <div ref={ref}>
                    {loading ? (
                      <div className='flex items-center justify-center'>
                        <Spinner />
                      </div>
                    ) : (
                      <table className='min-w-full divide-y divide-basicDark'>
                        <thead className='bg-darkTheme'>
                          <tr>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              Rider ID
                            </th>

                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              First Name
                            </th>
                            <th
                              scope='col'
                              className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                            >
                              Last Name
                            </th>
                            <th
                              scope='col'
                              className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                            >
                              Phone Number
                            </th>
                            <th
                              scope='col'
                              className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                            >
                              Address
                            </th>
                            <th
                              scope='col'
                              className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                            >
                              Email
                            </th>
                            <th
                              scope='col'
                              className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                            >
                              Status
                            </th>
                            <th
                              scope='col'
                              className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                            >
                              Edit
                            </th>
                            <th
                              scope='col'
                              className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                            ></th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-basicDark bg-darkTheme'>
                          {riders &&
                            riders.map((rider) => (
                              <tr>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white cursor-pointer px-2 py-2 rounded-lg'>
                                        RID{rider.id}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {rider.firstName}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {rider.lastName}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {rider.phoneNumber}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {rider.streetAddress}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {rider.email}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div
                                        className='font-medium text-white bg-productGreen py-1 px-2 rounded-md cursor-pointer'
                                        onClick={() =>
                                          handleEditClick(rider.id)
                                        }
                                      >
                                        View
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    )}

                    <ReactPaginate
                      pageCount={pageCount}
                      onPageChange={handlePageClick}
                      containerClassName={'flex justify-center mt-4'}
                      activeClassName={'text-white mx-6'}
                      previousLinkClassName={'text-productGreen'}
                      nextLinkClassName={'text-productGreen'}
                      breakLinkClassName={'text-white'}
                      disabledClassName={'text-white cursor-not-allowed'}
                    />
                  </div>
                </div>
                <div className='py-12'>
                  <Pdf targetRef={ref} filename='code-example.pdf'>
                    {({ toPdf }: any) => (
                      <button
                        onClick={toPdf}
                        className='inline-flex items-center justify-center rounded-md border border-transparent bg-productGreen px-4 py-2 text-sm font-medium text-white shadow-sm sm:w-auto'
                      >
                        Generate PDF
                      </button>
                    )}
                  </Pdf>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RidersUI;
