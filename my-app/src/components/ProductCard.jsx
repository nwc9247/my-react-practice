import { useState } from "react";

const ProductCard = ({ title, price, image }) => {
  const [added, setAdded] = useState(false);

  function handleClick() {
    setAdded(true);
  }
  return (
    <div className="card">
      <img src={image} alt={title} width="150" />
      <h2>{title}</h2>
      <p>Rs: {price}</p>

      <button onClick={handleClick}>
        {added ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
