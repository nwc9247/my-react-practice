import MyButton from "../components/Button";
import MyButtonS from "../components/ButtonS";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to my React Home Page</h1>

      <h2>Counting buttons Seperately!!</h2>
      <MyButton />
      <MyButton />
      <MyButtonS />
      <ul>
        <li><Link to="/about">About Page</Link></li>
        <li><Link to="/products">Product Page</Link></li>
        <li><Link to="/products/1">Sample Product Page</Link></li>
      </ul>
    </div>
  );
};

export default Home;
