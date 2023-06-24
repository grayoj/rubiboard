import React, { useEffect } from 'react';
import ExportToExcelButton from '../components/ExportToExcelButton';
import useRider from '../hooks/useRider';
import { toast } from 'react-toastify';

const ReportsUI: React.FC = () => {
  const { riders } = useRider();
  useEffect(() => {
    setTimeout(() => {
      toast.info(
        'This feature requires server bandwith and may not be sent to your mail on time',
        {
          autoClose: false,
          closeOnClick: false,
        }
      );
    }, 3000);
  }, []);

  return (
    <>
      <div className='ml-20 my-10'>
        <div className='bg-darkTheme rounded-md'>
          <div className='p-8 space-y-4'>
            <div>
              <h2 className='text-2xl font-bold text-white'>Your Reports</h2>
            </div>
            <div className='space-y-2'>
              <div>
                <label htmlFor='name' className='text-lg text-white'>
                  Here you can export all your reports as an Excel Sheet
                </label>
                <p id='name' className='text-white'>
                  <ExportToExcelButton
                    //@ts-ignore
                    riders={riders}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsUI;
