import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../utils/Url';

interface DeliveryResponse {
  deliveryCount: number;
  totalElements: number;
}

export const GraphComponent: React.FC = () => {
  const [deliveryCount, setDeliveryCount] = useState<number>(0);

  useEffect(() => {
    const fetchDeliveriesCount = async () => {
      try {
        // Retrieve the userId from local storage
        //@ts-ignore
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user && user.id; // Perform null check

        if (userId) {
          const response = await axios.get<DeliveryResponse>(
            `${baseUrl}/api/delivery/deliveries/rider?userId=${userId}`
          );
          const data = response.data;
          setDeliveryCount(data.totalElements);
        }
      } catch (error) {
        console.error('Error fetching Deliveries count:', error);
      } finally {
      }
    };

    fetchDeliveriesCount();
  }, []);

  const data = Array.from({ length: 12 }).map((_, index) => ({
    month: `Month ${index + 1}`,
    Deliveries: deliveryCount
      ? Math.round((deliveryCount / 12) * (index + 1))
      : 0,
  }));

  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='Deliveries' fill='#97E398' />
      </BarChart>
    </ResponsiveContainer>
  );
};
