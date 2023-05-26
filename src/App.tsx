import useLoadingDelay from './hooks/useLoadingDelay';
import Routing from './routes/Routing';
import PreLoader from './ui/Preloader';

function App(): JSX.Element {
  const Loading = useLoadingDelay(5000);
  return <div>{Loading ? <PreLoader /> : <Routing />}</div>;
}

export default App;
