import { Link } from 'react-router-dom';

const NotFoundUi: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md px-4 py-8 bg-basicDark shadow-md rounded-md'>
        <h1 className='text-4xl font-bold text-white'>404 - Page Not Found</h1>
        <p className='text-white mt-2 text-center'>
          The requested page could not be found.
        </p>
      </div>
      <Link
        to='/'
        className='bg-productGreen text-white font-semibold py-2 px-4 rounded'
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundUi;
