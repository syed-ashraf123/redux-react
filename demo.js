const { createStore } = require("redux");

//STORE

//ACTIONS

//action increment
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

//action decrement
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//REDUCER

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

//console.log(counter(0, increment()));

//Store Creation
let store = createStore(counter);

//Dispatch
store.dispatch(increment());

console.log(store.getState());
