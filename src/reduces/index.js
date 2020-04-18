import { ADD_ARTICLE } from '../constants/action-type';

// Reducers produce the state of an application. 
const initialState = {
    articles: [],
    posts: []
};

function rootReducer(state = initialState, action) {

    switch(action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        case "LOADED_POSTS":
            return Object.assign({}, state, {
                posts: state.posts.concat(action.payload)
            });
        default: return state;
    }
   
}

export default rootReducer;