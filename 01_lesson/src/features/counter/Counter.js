import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
//? Counter func Component
function Counter() {
  //? A hook to access the redux store's state.
  const count = useSelector((state) => state.counter.count);
  //? A hook to access the redux dispatch function
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
}

export default Counter;
