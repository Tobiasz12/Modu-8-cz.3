import reducers from '../reducers/index';
import { createStore } from 'redux';
import DevTools from '../DevTools';


const store = createStore(
  reducers,
  DevTools.instrument()
);

export default store;
