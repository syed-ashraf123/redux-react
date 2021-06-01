const loggedReducer = (state = "Your're SIgned out", action) => {
  switch (action.type) {
    case "SIGN_IN":
      return "You are Signed IN";
    case "SIGN_OUT":
      return "You are signed out";
    default:
      return state;
  }
};

export default loggedReducer;
