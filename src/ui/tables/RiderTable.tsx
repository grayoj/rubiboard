import React from 'react';
import { RiderData } from '../../utils/TableData';

export const RiderTable: React.FC = () => {
  return (
    <div className='my-4'>
      <h3 className='text-lg leading-6 font-medium text-white my-4'>
        Quick Overview
      </h3>
      <table className='table-auto w-full border-collapse border border-basicDark bg-darkTheme rounded-lg'>
        <thead>
          <tr>
            <th className='border border-basicDark px-4 py-2'>
              <p className='text-white'>First Name</p>
            </th>
            <th className='border border-basicDark px-4 py-2'>
              <p className='text-white'>Last Name</p>
            </th>
            <th className='border border-basicDark px-4 py-2'>
              <p className='text-white'>Email</p>
            </th>
            <th className='border border-basicDark px-4 py-2'>
              <p className='text-white'>Vehicle Number</p>
            </th>
            <th className='border border-basicDark px-4 py-2'>
              <p className='text-white'>Status</p>
            </th>
            <th className='border border-basicDark px-4 py-2'>
              <p className='text-white'>Actions</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {RiderData.map((item, index) => (
            <tr key={index}>
              <td className='border border-basicDark px-4 py-2 text-white text-center'>
                {item.firstName}
              </td>
              <td className='border border-basicDark px-4 py-2 text-white text-center'>
                {item.lastName}
              </td>
              <td className='border border-basicDark px-4 py-2 text-white text-center'>
                {item.email}
              </td>
              <td className='border border-basicDark px-4 py-2 text-white text-center'>
                {item.vehicleNumber}
              </td>
              <td className='border border-basicDark px-4 py-2 text-center'>
                <p className='text-productGreen'>Active</p>
              </td>
              <td className='border border-basicDark px-4 py-2 text-center'>
                <p className='bg-productGreen p-1 rounded-md text-white cursor-pointer'>
                  View
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
