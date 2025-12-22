import { useState } from "react";
const MyButtonS = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
        <h2>Counter button update together</h2>
      <button onClick={handleClick}>Clicked {count} times</button>
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  );
};

export default MyButtonS;
