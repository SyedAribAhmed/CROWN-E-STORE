import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer';

const middlewares = [];

const NODE_ENV = process.env.NODE_ENV;
if(NODE_ENV === 'development'){
    middlewares.push(logger);
}

 export const store = createStore(rootReducer, applyMiddleware(...middlewares))
 export const persistor = persistStore(store);

export default { store, persistor };