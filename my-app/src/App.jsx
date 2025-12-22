import { useState } from "react";
import "./App.css";
import MyButton from "./components/Button";
import AboutPage from "./components/About";
import MyProduct from "./components/Product";
import MyButtonS from "./components/ButtonS";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Welcome to my React App</h1>
        <h2>Counting buttons Seperately!!</h2>
        <MyButton />
        <MyButton />
        <MyButtonS />
        <AboutPage />
        <MyProduct />
      </div>
    </>
  );
}

export default App;
