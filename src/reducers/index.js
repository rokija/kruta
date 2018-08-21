import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./user";
import { posts } from "./posts";

const rootReducer = combineReducers({ loginReducer, registerReducer, posts });

export default rootReducer;
