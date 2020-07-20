import React, { useState } from "react";

function IncDec(props) {
  const [count, setCount] = useState(4);
 
    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        
            setCount(count - 1);
        }
        
    
  return (
    <div className="flex row justify-between my-5 input">
      <div
        className="cursor-pointer btn"
        id="down"
        onClick={count>1? decrement : null}
      >
        <img className="w-4/5" src="\images\minus-2.svg" alt="plus" />
      </div>
      <h3 className="text-center text-black font-bold">{count>1? count +" People" : count +" Person"}</h3>
      <div onClick={increment} className="block btn pb-3 cursor-pointer">
        <img className=" w-4/5" src="\images\plus-2.svg" alt="plus" />
      </div>
    </div>
  );
}

export default IncDec;
