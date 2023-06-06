import React from 'react';

const MemoizedComponent = React.memo(({ prop1, prop2 }) => {
  // Component logic and JSX rendering
  return (
    <div>
      <h1>Memoized Component</h1>
      <p>Prop 1: {prop1}</p>
      <p>Prop 2: {prop2}</p>
    </div>
  );
});

const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={incrementCount}>Increment Count</button>
      <MemoizedComponent prop1="Hello" prop2={count} />
    </div>
  );
};

export default ParentComponent;
