import { useState } from 'react'

function Inputing() {
    const [name, setName] = useState("");

  

  return (
    <div>
        isim gir <br></br>
        <input value={name} onChange={(e)=> setName(e.target.value)}/>
        <br></br>
        <br></br>
        <br></br>
        <h2>{name}</h2>
    </div>
  )
}

export default Inputing