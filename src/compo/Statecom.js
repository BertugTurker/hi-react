import { useState } from "react";

function StateApp() {
    const [name, setName] = useState("bert");
    const [age, setAge] = useState(32);
    const [friends, setFriends] = useState(["ali", "veli"]);
    const [adress, setAdress] = useState({title: "maltepe", zip: 34500})

    return (
        <div className="StateApp">
                <h1>hoş geldin {name} ({age}) </h1>
                <button onClick={() => name == "bert" ? setName("sülo"): setName("bert")}>change name</button>
                <button onClick={() => age === 32 ? setAge(61) : setAge(32)}>change age</button>

                <h2>friends</h2>
                {friends.map((friend, anahtar) => 
                    <div key={anahtar}> {friend} </div>)}

                <button onClick={() => friends.includes("ayse") ? setFriends([...friends]) : setFriends(["ayse", ...friends])}>add ayse</button>
                <button onClick={() => friends.includes("ayse") ? setFriends( friends.filter(e => e !== "ayse") ) : setFriends(friends)}>delete ayse</button>

                <hr />
                <br></br>

                <h2>Adres</h2>
                 <div>{adress.title} {adress.zip}</div>
                 <button onClick={() => setAdress({title: "ankara", zip: 60000, })}>change adress to default</button>












        </div>
    )
}

export default StateApp 