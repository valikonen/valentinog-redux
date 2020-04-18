import { ADD_ARTICLE } from "../constants/action-type";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ getState, dispatch }) {
    return function(next){
        return function(action) {
            // login here
            if(action.type === ADD_ARTICLE) {
                const findWords = forbiddenWords.some(word => action.payload.title.includes(word));

                if(findWords) {
                    return dispatch({
                        type: "FOUND_BAD_WORDS"
                    })
                }
            }
            return next(action);
        }
    }
}
