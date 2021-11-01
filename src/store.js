import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

const composeEnhancers = composeWithDevTools({});

const middleware = [thunk];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));