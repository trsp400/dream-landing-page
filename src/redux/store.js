import { createStore, applyMiddleware } from 'redux';
import { createSelectorHook } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// export const useSelector = createSelectorHook<rootReducer>(rootReducer);

export default store;
