import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, get_posts } from "./action";
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
      {isLogged ? <h3>Valuable info I shouldnt</h3> : "NOt logged"}
    </div>
  );
}

export default App;
