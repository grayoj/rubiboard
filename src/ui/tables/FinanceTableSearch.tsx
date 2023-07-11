import React from 'react';
import ReactPaginate from 'react-paginate';
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';
import { useQueryClient, QueryKey, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Finance } from '../../types/FinanceTypes';
import { Status } from '../Status';
import { baseUrl } from '../../utils/Url';
import { SearchInput } from '../inputs/SearchInput';

interface FinanceSearchTableProps {}

export const FinanceTableSearch: React.FC<FinanceSearchTableProps> = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');

  // Get the query client instance
  const queryClient = useQueryClient();

  const queryKey: QueryKey = ['finance', currentPage];

  const { data, isLoading, isError } = useQuery<
    { content: Finance[]; totalPages: any },
    Error
  >(queryKey, () => fetchFinance(currentPage));

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleRetry = () => {
    queryClient.invalidateQueries(queryKey);
  };

  const userData = localStorage.getItem('user');
  let userId: any;

  if (userData) {
    const user = JSON.parse(userData);
    userId = user.id;
  }

  const fetchFinance = async (page: number) => {
    const response = await fetch(
      `${baseUrl}/api/delivery/deliveries/rider/payments?userId=${userId}&page=${page}&search=${searchQuery}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch payments');
    }
    return response.json();
  };

  const filteredUsers = searchQuery
    ? data?.content.filter((finance) =>
        finance.reference?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data?.content;

  if (isError) {
    toast.error('Failed to fetch Payments', {
      autoClose: 2000,
    });
  }

  if (!data) {
    return (
      <main className='flex-1 xl:ml-64 bg-basicDark'>
        <div className='py-12'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'></div>
          <div className='px-4 sm:px-6 lg:px-8 mt-7'>
            <div className='sm:flex sm:items-center'>
              <div className='sm:flex-auto'>
                <h1 className='text-xl font-semibold text-white'>Finance</h1>
                <p className='mt-2 text-lg text-white'>
                  Search through Finance by reference code.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='container mx-auto max-w-7xl px-4 py-8 '>
            <p className='text-white text-center text-lg'>
              You do not have any finance records yet by your riders, Yet. When
              you do, it displays here.
            </p>
            <div className='flex justify-center my-10'>
              <div>
                <img
                  src='https://i.ibb.co/GJtDpcP/glass.png'
                  alt='Nothing Here'
                  className='w-20 h-20'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='flex-1 xl:ml-64 bg-basicDark'>
      <div className='py-12'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-2'></div>
        <div className='px-4 sm:px-6 lg:px-8 mt-7'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-white'>
                Search Payments
              </h1>
              <p className='mt-2 text-lg text-white'>
                Search Through <strong>Payments Made</strong> on the Rubi
                Logistics platform.{' '}
                <Link to='/finance/payments'>
                  <u>Go Back</u> or Use <u>Full Search</u>
                </Link>
              </p>
            </div>
            <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder='Search by Ref Code'
              />
            </div>
          </div>
          <div className='-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 my-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div
                ref={ref}
                className='overflow-hidden shadow ring-1 ring-white ring-opacity-5 md:rounded-lg'
              >
                {isLoading ? (
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
                ) : isError ? (
                  <div className='m-4 mx-auto flex flex-col items-center justify-center'>
                    <div className='text-white text-lg text-center mb-4'>
                      Unfortunately, we weren't able to fetch payment records.
                    </div>
                    <Button disabled={false} onClick={handleRetry}>
                      Try Again
                    </Button>
                  </div>
                ) : (
                  <>
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
                      <tbody className='divide-y divide-basicDark bg-darkTheme'>
                        {filteredUsers?.map((finance) => (
                          <>
                            <tr>
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
                                        <span>
                                          {finance.delivery.deliveryRider}
                                        </span>
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
                                    <div className='font-medium text-white'>
                                      NGN
                                    </div>
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
                                          <span>
                                            {finance.delivery?.user.name}
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
                                        {finance.delivery?.rider?.user
                                          .companyName ? (
                                          <span>
                                            {
                                              finance.delivery.rider?.user
                                                .companyName
                                            }
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
                        ))}
                      </tbody>
                    </table>
                    <ReactPaginate
                      pageCount={data?.totalPages}
                      onPageChange={handlePageClick}
                      containerClassName={'flex justify-center mt-4'}
                      activeClassName={'text-white mx-6'}
                      previousLinkClassName={'text-productGreen'}
                      nextLinkClassName={'text-productGreen'}
                      breakLinkClassName={'text-white'}
                      disabledClassName={'text-white cursor-not-allowed'}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
