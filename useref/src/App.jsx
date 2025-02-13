import { useRef, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const counter = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    counter.current++;

    console.log(count);
    console.log(counter);
  };
  return (
    <div className="useRefTutorial">
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
