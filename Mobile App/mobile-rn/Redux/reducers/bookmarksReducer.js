import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../constants";

const bookmarks = (state = [], action) => {
    switch(action.type) {
        case ADD_BOOKMARK:
            return [...state, action.payload]
        case REMOVE_BOOKMARK:
            return state.filter(bookmark => bookmark !== action.payload)
        default:
            return state
    }
}

export default bookmarks