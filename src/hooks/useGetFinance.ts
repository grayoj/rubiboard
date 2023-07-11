import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../utils/Url';
import { PaymentResponse, Payments } from '../types/DeliveryInterfaces';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../store/authSlice';

const useGetFinance = () => {
 const [pageCount, setPageCount] = useState(0);
 const [currentPage, setCurrentPage] = useState(0);
 const [loading, setLoading] = useState(true);
 const [payments, setPayments] = useState<Payments[]>([]);
 const navigate = useNavigate();

 const dispatch = useDispatch();

 useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
   dispatch(setUserToken(token));
  }
 }, [dispatch]);

 useEffect(() => {
  const userData = localStorage.getItem('user');
  let userId: any;

  if (userData) {
   const user = JSON.parse(userData);
   userId = user.id;
  }
  if (userId) {
   const fetchData = async () => {
    try {
     const response: AxiosResponse<PaymentResponse> = await axios.get(
      `${baseUrl}/api/delivery/deliveries/rider?userId=${userId}&page=${currentPage}&size=10`
     );
     const data = response.data;
     setPayments(data.content);
     setPageCount(data.totalPages);
     setLoading(false);
    } catch (error) {
     setLoading(false);
     console.error(error);
    }
   };

   fetchData();
  }
 }, [currentPage]);


 function handlePageClick({ selected }: { selected: number }) {
  setCurrentPage(selected);
 }

 function handleEditClick(id: number) {
  navigate(`dashboard/delivery/${id}`);
 }

 return {
  pageCount,
  currentPage,
  loading,
  payments,
  handlePageClick,
  handleEditClick,
 };
};

export default useGetFinance;
