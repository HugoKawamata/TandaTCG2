import { createStore, applyMiddleware } from 'redux';
// Uncomment the line below if you want redux actions logged in the console
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createTracker } from 'redux-segment';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const tracker = createTracker();
let middleware = [thunk, tracker];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware]; // append dev middleware when not on prod

    // Use this line if you want redux actions logged in the console
    // middleware = [...middleware, logger]
} else {
    middleware = [...middleware]; // append prod middleware
}

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(...middleware),
        ),
    );

    return store;
}
