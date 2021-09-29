import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { quotes } from './reducers/Quotes';

const rootReducer = combineReducers({
    quotes,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, enhancer);

export default store;
