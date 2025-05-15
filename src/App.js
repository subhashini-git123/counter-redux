import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux.js/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux-Counter</h1>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
};

export default App;