import { ADD_ARTICLE } from '../constants/action-type';

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    }
}

export function getPosts() {
    return function(dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => dispatch({ type: "LOADED_POSTS", payload: data}))
    }
}