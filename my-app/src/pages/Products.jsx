import React from "react";
import MyProduct from "../components/Product";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <MyProduct />
      <ProductCard
        title="Redmi Note 7"
        price={24500}
        image="https://images.fonearena.com/blog/wp-content/uploads/2019/04/Redmi-Note-7-Pro-Blue_fonearena-14-1024x706.jpg"
      />
      <ProductList />
    </div>
  );
};

export default Products;
