import { GraphComponent } from './graphs/GraphChart';

const GraphUI: React.FC = () => {
  const deliveryData = [10, 20, 15, 8, 12];
  return (
    <div className='mt-4 bg-darkTheme rounded-md'>
      <h1 className='text-xl font-bold mb-4 text-white py-4 pl-4'>
        Delivery Statistics
      </h1>
      <GraphComponent data={deliveryData} />
    </div>
  );
};

export default GraphUI;
