import { GraphComponent } from './graphs/GraphChart';

const GraphUI: React.FC = () => {
  return (
    <div className='mt-4 bg-darkTheme rounded-md'>
      <h1 className='text-xl font-bold mb-4 text-white py-4 pl-4'>
        Delivery Statistics
      </h1>

      <GraphComponent />
    </div>
  );
};

export default GraphUI;
