const products1 = [
  { title: "Cabbage", price: 200, isFruit: false, id: 1 },
  { title: "Garlic", price: 400, isFruit: false, id: 2 },
  { title: "Apple", price: 400, isFruit: true, id: 3 },
];

const products = [
  ...products1,
  { title: "Mango", price: 120, isFruit: true, id: 4 },
];
const MyProduct = () => {
  const listItems = products.map((product) => (
    <li
      className="products"
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title} - Rs {product.price}
    </li>
  ));

  const checkItem = products
    .filter((product) => product.isFruit == false)
    .map((product) => (
      <li className="products" key={product.id}>
        {product.title} - Rs {product.price}
      </li>
    ));

  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
  return (
    <div className="productItems">
      <ul className="listItems">{listItems}</ul>

      <h3>Non fruit items</h3>
      <ul className="nonFruits">{checkItem}</ul>
      <p className=" totalPrice">Total Product Price: Rs {totalPrice}</p>
    </div>
  );
};

export default MyProduct;
