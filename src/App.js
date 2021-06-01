import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, get_posts, signin, signout } from "./action";
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        Counter
        {counter}
      </h1>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(get_posts())}>Get API</button>
      <button onClick={() => dispatch(signin())}>Sign IN</button>
      <button onClick={() => dispatch(signout())}>Sign Out</button>
      {isLogged}
    </div>
  );
}

export default App;
