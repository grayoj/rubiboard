import React, { useRef } from 'react';
import Pdf from 'react-to-pdf';
import Button from '../ui/buttons/Button';

const FinanceTable: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <main className='flex-1 xl:ml-64 bg-basicDark'>
      <div className='py-12'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'></div>
        <div className='px-4 sm:px-6 lg:px-8 mt-7'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-white'>
                Financial Records
              </h1>
              <p className='mt-2 text-lg text-white'>
                This displays all your Financial Records
              </p>
            </div>
            <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'></div>
          </div>
          <div className='mt-8 flex flex-col'>
            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-white ring-opacity-5 md:rounded-lg'>
                  <div ref={ref}>
                    <table className='min-w-full divide-y divide-basicDark'>
                      <thead className='bg-darkTheme'>
                        <tr>
                          <th
                            scope='col'
                            className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                          >
                            ID
                          </th>

                          <th
                            scope='col'
                            className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'
                          >
                            User ID
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                          >
                            Reference Code
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                          >
                            Amount
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                          >
                            Gateway Response
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                          >
                            Paid At
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                          >
                            Created At
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                          >
                            Channel
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                          >
                            Currency
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                          >
                            IP Addresse
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                          >
                            Customer's Name
                          </th>
                          <th
                            scope='col'
                            className='px-3 py-3.5 text-left text-sm font-semibold text-white'
                          >
                            Rider's Name
                          </th>
                          <th
                            scope='col'
                            className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                          >
                            {/* <span className='sr-only'>Edit</span> */}
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-basicDark bg-darkTheme'>
                        <tr>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                {/* <div
                                  className={
                                    'font-medium text-white cursor-pointer bg-productGreen px-2 py-2 rounded-lg' +
                                    (index === currentIndex ? '' : '')
                                  }
                                  onClick={() =>
                                    this.setActiveRiders(rider, index)
                                  }
                                  key={index}
                                > */}
                                {/* RID{rider.id} */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'></div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.lastName} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.phoneNumber} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.streetAddress} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.email} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.email} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.email} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.email} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.email} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.email} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.email} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                            <div className='flex items-center'>
                              <div className='ml-1'>
                                <div className='font-medium text-white'>
                                  {/* {rider.email} */}
                                </div>
                                {/* <div className='text-white'>
                                      {delivery.packageName}
                                    </div> */}
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default FinanceTable;
