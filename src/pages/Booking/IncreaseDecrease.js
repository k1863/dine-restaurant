import React, { useState } from "react";

import "../../sass/app.scss";

function IncreaseDecrease(props) {
  const [count, setCount] = useState(4);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="increase-container input">
      <div
        className="decrement-box"
        id="down"
        onClick={count > 1 ? decrement : null}
      >
        <img className="minus" src="\images\minus-2.svg" alt="plus" />
      </div>
      <h3 className="people-txt">
        {count > 1 ? count + " People" : count + " Person"}
      </h3>
      <div onClick={increment} className="increment-box">
        <img className="minus" src="\images\plus-2.svg" alt="plus" />
      </div>
    </div>
  );
}

export default IncreaseDecrease;
