const axios = require("axios").default;

const loggedReducer = (state = "Not Signed In", action) => {
  switch (action.type) {
    case "SIGN_IN":
      return (state = "Signed IN");
    case "SIGN_OUT":
      return (state = "Signed Out");

    default:
      return state;
  }
};
export default loggedReducer;
