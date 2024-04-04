import React, { useState } from 'react';

const App  = () => {
  const  [count, setCount] = useState(0);

function incrementClick() {
  console.log('clicked');
  setCount(count + 1);
}
const decrementClick = ()=> {
  console.log('clicked');
  setCount(count - 1);
};


  
    return (
      <div>
        <h1>Counter is zero {count}</h1>
        <button onClick={incrementClick}>Increment</button>
        <button onClick={decrementClick}>Decrement</button>
      </div>
    )
  }

export default App;
