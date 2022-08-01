import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(()=> {
        console.log("mounted");

        const interval = setInterval(() => {
            setNumber((n)=>n+1)
        }, 1000)
           // return () => clearInterval(interval)
    }, []);


    useEffect(()=> {
        console.log("sayıda güncelleme")
    }, [number]);


    const art = () => {
        setNumber(number+1)
    };

    const azalt = () => {
        setNumber(number-1)
    };

  return  <div>
        <h1>{number}</h1>
        <button onClick={art}>art</button>
        <button onClick={azalt}>azalt</button>

  </div>
  
  
}

export default Counter