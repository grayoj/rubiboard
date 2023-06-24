import React, { useRef } from 'react';
import Pdf from 'react-to-pdf';
import ReactPaginate from 'react-paginate';
import useGetDelivery from '../../hooks/useGetDelivery';
import Button from '../buttons/Button';

const DeliveriesTable: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { pageCount, loading, deliveries, handlePageClick } = useGetDelivery();

  if (!deliveries) {
    return (
      <div className='bg-darkTheme container mx-auto px-4 py-8'>
        <p className='text-white text-2xl'>
          You do not have any Deliveries done by your riders
        </p>
      </div>
    );
  }
  return (
    <main className='flex-1 xl:ml-64 bg-basicDark'>
      <div className='py-12'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'></div>
        <div className='px-4 sm:px-6 lg:px-8 mt-7'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-white'>Deliveries</h1>
              <p className='mt-2 text-lg text-white'>
                Here you can see details the deliveries by the rider who
                facilitated the delivery.
              </p>
            </div>
          </div>
          <div className='mt-8 flex flex-col'>
            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-white ring-opacity-5 md:rounded-lg'>
                  <div ref={ref}>
                    {loading ? (
                      <div
                        className='text-white flex justify-center items-center
'
                      >
                        <svg
                          className='animate-spin h-5 w-5 mr-3 ...'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            stroke-width='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                      </div>
                    ) : (
                      <table className='min-w-full divide-y divide-basicDark'>
                        <thead className='bg-darkTheme'>
                          <tr>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              Package ID
                            </th>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              Dropoff Address
                            </th>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              Pickup Address
                            </th>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              Package Name
                            </th>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              Package Type
                            </th>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              Rider
                            </th>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              Amount
                            </th>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              Timestamp
                            </th>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                            >
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-basicDark bg-darkTheme'>
                          {deliveries &&
                            deliveries.map((delivery) => (
                              <tr>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white cursor-pointer px-2 py-2 rounded-lg'>
                                        RUB{delivery.id}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {delivery.dropAddress}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {delivery.pickupAddress}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {delivery.packageName}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {delivery.packageType}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {delivery.amount}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {delivery.timestamp}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                  <div className='flex items-center'>
                                    <div className='ml-1'>
                                      <div className='font-medium text-white'>
                                        {delivery.rider}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <>
                                  <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                    <div className='flex items-center'>
                                      <div className='ml-1'>
                                        <div className='font-medium text-white'>
                                          {delivery.status}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    )}
                    {loading ? (
                      <div></div>
                    ) : (
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
                    )}
                  </div>
                </div>
                <div className='py-12'>
                  <Pdf targetRef={ref} filename='code-example.pdf'>
                    {({ toPdf }: any) => (
                      <Button onClick={toPdf} disabled={false}>
                        Generate PDF
                      </Button>
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
export default DeliveriesTable;
