import axios from "axios";
import { API, SET_POSTS, POST_SUCCESS, POST_ERROR } from "../constants";

const token = localStorage.getItem("jwtToken");

export const setPosts = payload => ({ payload, type: SET_POSTS });

export const submitPostSuccess = () => ({
  payload: {
    isSubmitted: true
  },
  type: POST_SUCCESS
});

export const submitPostError = () => ({
  payload: {
    isSubmitted: false
  },
  type: POST_ERROR
});

export const getPosts = () => {
  return dispatch => {
    return axios({
      method: "get",
      headers: {
        Authorization: "Bearer " + token
      },
      url: `${API.BASE}${API.GET_POSTS}`
    })
      .then(res => {
        dispatch(
          setPosts({ list: res.data.payload.reverse(), isFetched: true })
        );
        return true;
      })
      .catch(() => false);
  };
};

export const submitPost = ({ caption, formData }) => {
  return dispatch => {
    return axios({
      method: "post",
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + token
      },
      data: formData,
      url: `${API.BASE}${API.POST_IMAGE}`
    })
      .then(res => {
        return axios({
          method: "post",
          headers: {
            Authorization: "Bearer " + token
          },
          data: {
            caption,
            contentId: res.data.payload.contentId
          },
          url: `${API.BASE}${API.POST_CAPTION}`
        }).then(() => dispatch(submitPostSuccess()));
      })
      .catch(() => dispatch(submitPostError()));
  };
};
