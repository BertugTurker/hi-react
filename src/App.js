import './App.css';
//import User from "./compo/User";
import Count from "./compo/Counter";
import { useState } from "react";


function App() {

  const [IsVisible, setIsVisible] = useState(true)
  return (
    <>
    {IsVisible && <Count />}
    <button onClick={()=> setIsVisible(!IsVisible)}>toggle</button>
    </>
  );
}

export default App;
