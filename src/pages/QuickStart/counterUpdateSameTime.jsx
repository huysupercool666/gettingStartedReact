import { useState } from "react";

export default function CounterUpdateSameTime() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update together</h1>
      <Mybutton count={count} onClick={handleClick} />
      <Mybutton count={count} onClick={handleClick} />  
    </div>
  );
}

function Mybutton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
