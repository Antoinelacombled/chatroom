import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import logMiddleware from '../middleware/logMiddleware';

const enhancers = composeWithDevTools(
    applyMiddleware(
        logMiddleware,
    )
);


import reducer from '../reducers/chat';

const store = createStore(
    reducer,
    enhancers,
);

export default store; 