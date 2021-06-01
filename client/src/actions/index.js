import Axios from "axios";
//Actions

//increment action
export const increment = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  };
};
//decrement action
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//signin action
export const signin = () => {
  return {
    type: "SIGN_IN",
  };
};
//signout action
export const signout = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const get_post = () => {
  return async (dispatch) => {
    const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: "get_posts",
      payload: res,
    });
  };
};
