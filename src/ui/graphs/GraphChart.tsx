import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartData, GraphProps } from '../../types/GraphProps';

export const GraphComponent: React.FC<GraphProps> = () => {
  const data: ChartData[] = [
    { month: 'Month 1', Deliveries: 10 },
    { month: 'Month 2', Deliveries: 20 },
    { month: 'Month 3', Deliveries: 15 },
    { month: 'Month 4', Deliveries: 8 },
    { month: 'Month 5', Deliveries: 12 },
  ];

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
