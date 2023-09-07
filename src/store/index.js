import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import logMiddleware from '../middleware/logMiddleware';
import authMiddleware from '../middleware/authMiddleware';
import socketMiddleware from '../middleware/socketMiddleware';

const enhancers = composeWithDevTools(
    applyMiddleware(
        logMiddleware,
        authMiddleware,
        socketMiddleware,
    )
);


import reducer from '../reducers/chat';

const store = createStore(
    reducer,
    enhancers,
);

export default store; 