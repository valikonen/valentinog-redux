import { ADD_ARTICLE } from '../constants/action-type';

// Reducers produce the state of an application. 
const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {

    switch(action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            })
        default: return state;
    }
   
}

export default rootReducer;