import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signin, signout, get_post } from "./actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>REDUX TUTORIAL</h1>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {counter}
      <br />
      <button onClick={() => dispatch(signin())}>Sign IN</button>
      <button onClick={() => dispatch(signout())}>Sign Out</button>
      {logged}

      <br />
      <button onClick={() => dispatch(get_post())}>Fectch</button>
    </div>
  );
}

export default App;
