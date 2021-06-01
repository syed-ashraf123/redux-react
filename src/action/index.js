import axios from "axios";

export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const signin = () => {
  return {
    type: "SIGN_IN",
  };
};

export const signout = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const get_posts = () => {
  return async function (dispatch) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data[0].id);
    dispatch({
      type: "get_posts",
      payload: [res.data[0].id],
    });
  };
};
