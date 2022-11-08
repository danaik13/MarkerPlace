import { lazy, Suspense } from 'react';
import Loader from '../components/Loader';

const ReduxContainer = lazy(() => import('./ReduxContainer'));

const App = () => (
  <Suspense fallback={<Loader />}>
    <ReduxContainer />
  </Suspense>
)

export default App;