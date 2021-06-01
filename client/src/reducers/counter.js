const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    case "get_posts":
      return action.payload;
    default:
      return state;
  }
};
export default countReducer;
