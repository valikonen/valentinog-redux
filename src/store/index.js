import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reduces/index";
import { forbiddenWordsMiddleware } from '../middleware/middleware';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS__EXTENTIONS__COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;