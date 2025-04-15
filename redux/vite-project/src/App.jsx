// src/App.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: 10 }}>
        Giảm
      </button>
    </div>
  );
}

export default App;
