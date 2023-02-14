import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector(state => state.showCounter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  const incrementHander = () => {
    dispatch({type: 'increment'})
  };

  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 5})
  };

  const decrementHander = () => {
    dispatch({type: 'decrement'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHander}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHander}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
