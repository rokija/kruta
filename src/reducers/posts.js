import { SET_POSTS, POST_SUCCESS, POST_ERROR } from "../constants";

export const posts = (state = {}, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, ...action.payload };
    case POST_SUCCESS:
      return { ...state, ...action.payload };
    case POST_ERROR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
