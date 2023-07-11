import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';
import { PaymentResponse } from '../../types/PaymentTypes';
import { Status } from '../Status';
import Button from '../buttons/Button';
import { baseUrl } from '../../utils/Url';

interface SearchScreenProps {}

export const SearchPaymentScreen: React.FC<SearchScreenProps> = () => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [deliveryRider, setDeliveryRider] = useState('');
  const [paymentResponses, setPaymentResponses] = React.useState<
    PaymentResponse[]
  >([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleSearch = () => {
    // Format the dates as "YYYY-MM-DD" strings
    const fromDateString = fromDate
      ? new Date(fromDate.getTime() - fromDate.getTimezoneOffset() * 60000)
          .toISOString()
          .split('T')[0]
      : null;
    const toDateString = toDate
      ? new Date(toDate.getTime() - toDate.getTimezoneOffset() * 60000)
          .toISOString()
          .split('T')[0]
      : null;

    console.log('From Date:', fromDateString);
    console.log('To Date:', toDateString);
    console.log('Rider Name:', deliveryRider);

    const userData = localStorage.getItem('user');
    let userId: any;

    if (userData) {
      const user = JSON.parse(userData);
      userId = user.id;
    }

    fetch(
      `${baseUrl}/api/delivery/deliveries/rider/payments/search?userId=${userId}&fromDate=${fromDateString}&toDate=${toDateString}&companyName=${deliveryRider}&page=${currentPage}&size=10`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch payment responses');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Payment Responses:', data);
        setPaymentResponses(data.content || []);
        setTotalPages(data.totalPages || 0);
        // Check if 'totalAmount' exists in the metadata
        setTotalAmount(data.totalAmount || 0);
      })
      .catch((error) => {
        console.error('Error fetching payment responses:', error);
      });
  };

  return (
    <>
      <main className='flex-1 xl:ml-64 bg-basicDark'>
        <div className='py-10'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-2'></div>
          <div className='px-4 sm:px-6 lg:px-8 mt-7'>
            <div className='sm:flex sm:items-center'>
              <div className='sm:flex-auto'>
                <h1 className='text-xl font-semibold text-white'>
                  Payment Search
                </h1>
                <p className='mt-2 text-lg text-white'>
                  This module will allow you search the entire system and
                  provide the result. Search by Date Range and Rider Name. It
                  would also calculate the total amount for a period. Go back to{' '}
                  <u>
                    <a href='/finance/payments/search'>Normal Search.</a>
                  </u>
                </p>
                <p className='text-white text-lg font-bold'>
                  Total Amount Calculated: ₦{totalAmount}
                </p>
              </div>
              <div className='my-4'>
                <div className='flex'>
                  <div className='mr-4'>
                    <label className='text-white'>From Date:</label>
                    <DatePicker
                      selected={fromDate}
                      onChange={(date: Date) => setFromDate(date)}
                      placeholderText='From'
                      className='border border-gray-300 px-2 py-1 rounded'
                    />
                  </div>
                  <div className='mr-4'>
                    <label className='text-white'>To Date:</label>
                    <DatePicker
                      selected={toDate}
                      onChange={(date: Date) => setToDate(date)}
                      placeholderText='To'
                      className='border border-gray-300 px-2 py-1 rounded'
                    />
                  </div>
                  <div>
                    <label className='text-white'>Rider's Name:</label>
                    <input
                      type='text'
                      value={deliveryRider}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDeliveryRider(e.target.value)
                      }
                      placeholder='Rider Name'
                      className='border border-gray-300 px-2 py-1 rounded'
                    />
                  </div>
                </div>
                <div className='my-1'>
                  <Button disabled={false} onClick={handleSearch}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
            <table className='min-w-full divide-y divide-basicDark'>
              <thead className='bg-darkTheme'>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-white sm:pl-6'
                  >
                    Id
                  </th>
                  {/* <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                  >
                    Message
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                  >
                    Authorization Url
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                  >
                    Access Code
                  </th> */}
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                  >
                    Reference
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                  >
                    Rider Name
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
                    Currency
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                  >
                    Customer
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                  >
                    Company
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                  >
                    Timestamp
                  </th>
                </tr>
              </thead>
              {paymentResponses.map((finance: any) => (
                <tbody className='divide-y divide-basicDark bg-darkTheme'>
                  <>
                    <tr key={finance.id}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                        <div className='flex items-center'>
                          <div className='ml-1'>
                            <div className='font-medium text-white cursor-pointer px-2 py-2 rounded-lg'>
                              RUB{finance.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                        <div className='flex items-center'>
                          <div className='ml-1'>
                            <div className='font-medium text-white'>
                              {finance.message}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                        <div className='flex items-center'>
                          <div className='ml-1'>
                            <div className='font-medium text-white'>
                              {finance.authorizationUrl}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                        <div className='flex items-center'>
                          <div className='ml-1'>
                            <div className='font-medium text-white'>
                              {finance.accessCode}
                            </div>
                          </div>
                        </div>
                      </td> */}
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                        <div className='flex items-center'>
                          <div className='ml-1'>
                            <div className='font-medium text-white'>
                              {finance.reference}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                        <div className='flex items-center'>
                          <div className='ml-1'>
                            <div className='font-medium text-white'>
                              {finance.delivery?.deliveryRider ? (
                                <span>{finance.delivery.deliveryRider}</span>
                              ) : (
                                <span>Unassigned</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                        <div className='flex items-center'>
                          <div className='ml-1'>
                            <div className='font-medium text-white'>
                              {finance.amount}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                        <div className='flex items-center'>
                          <div className='ml-1'>
                            <div className='font-medium text-white'>NGN</div>
                          </div>
                        </div>
                      </td>
                      <>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                          <div className='flex items-center'>
                            <div className='ml-1'>
                              <div className='font-medium text-white'>
                                {finance.delivery?.paymentStatus ===
                                'PAYMENT_FALIED' ? (
                                  <Status color='red'>Failed</Status>
                                ) : (
                                  <Status color='green'>Success</Status>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                          <div className='flex items-center'>
                            <div className='ml-1'>
                              <div className='font-medium text-white'>
                                {finance.delivery?.user.name ? (
                                  <span>{finance.delivery?.user.name}</span>
                                ) : (
                                  <span>N/A</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                          <div className='flex items-center'>
                            <div className='ml-1'>
                              <div className='font-medium text-white'>
                                {finance.delivery?.rider?.user.companyName ? (
                                  <span>
                                    {finance.delivery.rider?.user.companyName}
                                  </span>
                                ) : (
                                  <span>N/A</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                          <div className='flex items-center'>
                            <div className='ml-1'>
                              <div className='font-medium text-white'>
                                {finance?.createdAt ? (
                                  <span>{finance?.createdAt}</span>
                                ) : (
                                  <span>N/A</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                      </>
                    </tr>
                  </>
                </tbody>
              ))}
            </table>
            <ReactPaginate
              pageCount={totalPages}
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
      </main>
    </>
  );
};
