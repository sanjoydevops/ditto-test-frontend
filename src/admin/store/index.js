import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';
import saga, { sagas } from './sagas';

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(saga, thunk)),
);

saga.run(sagas);
