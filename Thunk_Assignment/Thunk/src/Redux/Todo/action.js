import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "./actionTypes";

import axios from "axios";

export const ActionTodoReq = () => {
  return { type: TODO_REQUEST };
};

export const ActionTodoFailure = () => {
  return { type: TODO_FAILURE };
};

export const ActionTodoSuccess = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};

export const ActionPostTodoSuccess = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};

const url = "http://localhost:8080/todos";
export const getTodo = (dispatch) => {
  dispatch(ActionTodoReq());
  axios
    .get(url)
    .then((res) => {
      dispatch(ActionTodoSuccess(res.data));
    })
    .catch((err) => {
      dispatch(ActionTodoFailure());
    });
};

export const handleAddTodo = (value) => (dispatch) => {
  if (value) {
    var userDetails = {
      title: value,
      status: false,
    };
  }
  dispatch(ActionTodoReq());
  axios
    .post(url, userDetails)
    .then((res) => {
      dispatch(ActionPostTodoSuccess(res.data));
      getTodo();
    })
    .catch((err) => {
      dispatch(ActionTodoFailure());
    });
};
