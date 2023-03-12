import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  todos: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: payload,
      };
    case TODO_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_TODO_SUCCESS:
      return { ...state, isLoading: false, todos: [...state.todos, payload] };
    default:
      return state;
  }
};
