import './App.css';

const name = "bertuğ"
const surname = "türker"
const isExist = true

function App() {
  return (
    <>
      <h1> {isExist ? `exist ${name[0]} ${surname}` : "giriş yok" } </h1>
    </>
  );
}

export default App;
