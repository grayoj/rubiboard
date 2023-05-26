import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import useLoadingBar from '../hooks/useLoadingBar';

const AuthGateway: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const loadingBarRef = useLoadingBar(10000, '/auth/signup');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBar
          color='#97E398'
          height={3}
          ref={loadingBarRef}
          progress={0}
        />
      ) : null}
    </div>
  );
};

export default AuthGateway;
