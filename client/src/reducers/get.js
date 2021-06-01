const getReducer = (state = 0, action) => {
  switch (action.type) {
    case "get_posts":
      return action.payload;

    default:
      return state;
  }
};

export default getReducer;
