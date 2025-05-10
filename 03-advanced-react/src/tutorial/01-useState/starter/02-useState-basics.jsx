import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Click Count: {count}</h2>
      <button className="btn" onClick={handleClick}>
        Press
      </button>
    </div>
  );
};

export default UseStateBasics;
