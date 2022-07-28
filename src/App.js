import './App.css';
import User from "./compo/User";


function App() {
  return (
    <>
    <User
    name="bertug"
    surname= "turk"
    //age= "32"
    isExist={true}
    friends= {["murat", "baris", "melo"]}
    adress = {{
      title: "Maltepe",
      zip: 34867
    }}
    />
    </>
  );
}

export default App;
