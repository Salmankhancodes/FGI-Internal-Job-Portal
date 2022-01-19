import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import bookmarks from "./reducers/bookmarksReducer";

const reducers = combineReducers({
    bookmarks
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store