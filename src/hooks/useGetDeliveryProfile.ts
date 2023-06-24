import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/Url';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Delivery {
  id: number;
  customerName: string;
  customerEmail: string;
  customerNumber: string;
  dropAddress: string;
  pickupAddress: string;
  packageName: string;
  packageType: string;
  deliveryStatus: string;
  amount: number;
  timestamp: string;
  delivered: boolean;
}

export function useGetDeliveryProfile(id: string) {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/delivery/dashboard/${id}`);
        setDeliveries(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDeliveries();
  }, [id]);


  const handleUpdateStatus = (deliveryId: string, status: string) => {
    axios
      .put(`${baseUrl}/api/delivery/dashboard/${deliveryId}/status`, { status })
      .then((response) => {
        console.log(response.data);
        toast.success('Status was updated successfully');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        toast.error('Status was not updated');
      });
  };



  return { deliveries, loading, handleUpdateStatus };
}
