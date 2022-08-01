import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    const art = () => {
        setNumber(number+1)
    }

    const azalt = () => {
        setNumber(number-1)
    }

  return  <div>
        <h1>{number}</h1>
        <button onClick={art}>art</button>
        <button onClick={azalt}>azalt</button>

  </div>
  
  
}

export default Counter