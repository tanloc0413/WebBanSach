import React, { useState } from "react";
import "./IncrementDecrementBtn.css";

const IncrementDecrementBtn = ({ minValue = 0, maxValue = 100 }) => {
  const [count, setCount] = useState(minValue);

  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className="btn-group">
      <button className="increment-btn" onClick={handleIncrementCounter}>
        <span class="material-symbols-outlined">add</span>
      </button>
      <p>{count}</p>
      <button className="decrement-btn" onClick={handleDecrementCounter}>
        <span class="material-symbols-outlined">remove</span>
      </button>
    </div>
  );
};

export default IncrementDecrementBtn;