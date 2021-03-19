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

// export const get_posts = () => {
//   return {
//     type: "get_posts",
//     payload: "jyf",
//   };
// };

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

// export async function fetchPosts() {
//   return async (dispatch) => {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//     return {
//       type: "get_posts",
//       payload: res,
//     };
//   };
// }
