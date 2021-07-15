import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
	trace: true,
	traceLimit: 25,
});

export const store = createStore(reducers, compose(
	applyMiddleware(ReduxThunk),
	composeEnhancers(),
));