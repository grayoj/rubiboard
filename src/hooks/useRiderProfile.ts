import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/Url';
import { useDispatch, useSelector } from 'react-redux';
import { setUserToken } from '../store/authSlice';
import { RootState } from '../store/store';

interface Rider {
 id: number;
 fullName: string;
 streetAddress: string;
 username: string;
 email: string;
 vehicleNumber: string;
 phone: string;
}

interface RiderResponse {
 data: Rider;
}

const useRiderProfile = (id: number) => {
 const [rider, setRider] = useState<Rider | null>(null);
 const [loading, setLoading] = useState(true);

 const dispatch = useDispatch();
 const userToken = useSelector((state: RootState) => state.auth.userToken);

 useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
   dispatch(setUserToken(token));
  }
 }, [dispatch]);

 useEffect(() => {
  if (userToken) {
   const fetchRider = async () => {
    try {
     const response: RiderResponse = await axios.get(`${baseUrl}/api/user/riders/${id}`, {
      headers: {
       Authorization: `Bearer ${userToken}`,
      },
     });
     setRider(response.data);
     setLoading(false);
    } catch (error) {
     console.error(error);
     setLoading(false);
    }
   };


   fetchRider();
  }
 }, [id, userToken]);

 return { rider, loading };
};

export default useRiderProfile;
