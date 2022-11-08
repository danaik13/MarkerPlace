import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import RouterContainer from "./RouterContainer";

export default () => (
  <Provider store={store}>
    <RouterContainer />
  </Provider>
);
