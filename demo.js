const { createStore } = require("redux");
//Actions
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//Reducer

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 2;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// console.log(counter(2, increment()));
let store = createStore(counter);

store.dispatch(increment());

console.log(store.getState());
