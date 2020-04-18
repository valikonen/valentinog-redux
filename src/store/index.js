import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reduces/index";
import { forbiddenWordsMiddleware } from '../middleware/middleware';

const store = createStore(rootReducer, applyMiddleware(forbiddenWordsMiddleware));

export default store;