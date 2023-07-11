import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from './Loader';

export const UnderConstructionUI: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Redirect after 5 seconds
    const redirectTimeout = setTimeout(() => {
      navigate('/dashboard');
    }, 6000);

    // Cleanup the timeouts when the component unmounts or the effect runs again
    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md py-8 bg-basicDark shadow-md rounded-md'>
        <h1 className='text-4xl text-center font-bold text-white'>
          Under Construction
        </h1>
        <p className='text-white mt-2 text-center'>
          This page is currently under construction. Hence, you will be
          redirected back home.
        </p>
        <p className='text-white flex my-2 justify-center'>
          {isLoading ? 'Redirecting' : <Loader />}
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
