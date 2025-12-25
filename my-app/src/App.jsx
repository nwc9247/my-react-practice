import "./App.css";
import MyButton from "./components/Button";
import AboutPage from "./components/About";
import MyProduct from "./components/Product";
import MyButtonS from "./components/ButtonS";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";

function App() {

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
        <ProductCard
          title="Redmi Note 7"
          price={24500}
          image="https://images.fonearena.com/blog/wp-content/uploads/2019/04/Redmi-Note-7-Pro-Blue_fonearena-14-1024x706.jpg"
        />
      </div>

      <ProductList />
    </>
  );
}

export default App;
