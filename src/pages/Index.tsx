import React, { useState, useEffect, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const loadingBarRef: RefObject<any> = React.createRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      loadingBarRef.current?.complete();
      navigate('/login');
    }, 10000);
    loadingBarRef.current?.continuousStart();
    return () => clearTimeout(timeout);
  }, [navigate]);

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

export default Index;
